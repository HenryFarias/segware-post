package br.com.segware.post;

import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class InfiniteScrollPage<T> extends PageImpl {

    public InfiniteScrollPage(List content, Pageable pageable, long total) {
        super(content, pageable, total);
    }

    @Override
    public int getTotalPages() {
        int size = this.getSize() / getPageable().getPageNumber();
        return size == 0 ? 1 : (int)Math.ceil((double)this.getTotalElements() / size);
    }

    @Override
    public boolean isLast() {
        return getPageable().getPageNumber() >= getTotalPages();
    }
}

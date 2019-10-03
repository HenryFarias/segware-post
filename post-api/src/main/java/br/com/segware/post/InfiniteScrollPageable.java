package br.com.segware.post;

import org.springframework.data.domain.PageRequest;

public class InfiniteScrollPageable extends PageRequest {

    public InfiniteScrollPageable(int page, int size) {
        super(page, size);
    }

    @Override
    public int getPageSize() {
        return super.getPageSize() * getPageNumber();
    }

    @Override
    public long getOffset() {
        return 0;
    }
}

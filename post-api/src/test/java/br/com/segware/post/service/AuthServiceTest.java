package br.com.segware.post.service;

import br.com.segware.post.respository.PostRepository;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

public class AuthServiceTest {

    @InjectMocks
    private PostService service;

    @InjectMocks
    private UserService userService;

    @Mock
    private PostRepository repository;

    @Test
    public void addUpVoteSuccess() {
        service.addUpVote(1L);
    }

}

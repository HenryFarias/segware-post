package br.com.segware.post.service;

import br.com.segware.post.model.Post;
import br.com.segware.post.model.User;
import br.com.segware.post.respository.PostRepository;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

public class PostServiceTest {

    @InjectMocks
    private PostService service;

    @InjectMocks
    private UserService userService;

    @InjectMocks
    private AuthService authService;

    @Mock
    private PostRepository repository;

    @Test
    public void addUpVoteSuccess() {
        User authentication = authService.getAuthentication();
        Post postBefore = service.findById(1L);
        service.addUpVote(1L);
        Post postAfter = service.findById(1L);

        Assert.assertEquals(postBefore.getUsersUpVotes().size() + 1, postAfter.getUsersUpVotes().size());
        Assert.assertEquals(postBefore.getUser().getId(), authentication.getId());
    }

}

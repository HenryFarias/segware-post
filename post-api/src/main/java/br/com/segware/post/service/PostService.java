package br.com.segware.post.service;

import br.com.segware.post.exception.ApplicationException;
import br.com.segware.post.gcp.GCPService;
import br.com.segware.post.model.Post;
import br.com.segware.post.model.User;
import br.com.segware.post.respository.PostRepository;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PostService {

    private final PostRepository repository;
    private final GCPService gcpService;
    private final AuthService authService;

    @Autowired
    public PostService(PostRepository repository, GCPService gcpService, AuthService authService) {
        this.repository = repository;
        this.gcpService = gcpService;
        this.authService = authService;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Page<Post> findAll(Pageable pageable) {
        return this.repository.findAll(pageable);
    }

    public void save(Post post) throws UnirestException, IOException {
        String description = gcpService.substituirPalvrao(post.getDescription());
        post.setDescription(description);
        post.setUser(authService.getAuthentication());
        this.repository.save(post);
    }

    public void addUpVote(Long id) {
        Post post = findById(id);

        Set<User> users = post.getUsersUpVotes();
        users.addAll(Collections.singletonList(authService.getAuthentication()));
        post.setUsersUpVotes(new HashSet<>(users));

        this.repository.save(post);
    }

    public void removeUpVote(Long id) {
        User userLogged = authService.getAuthentication();
        Post post = findById(id);
        List<User> users = post.getUsersUpVotes()
                                .stream()
                                .filter((user) -> !user.getId().equals(userLogged.getId()))
                                .collect(Collectors.toList());
        post.setUsersUpVotes(new HashSet<>(users));
        this.repository.save(post);
    }

    public Post findById(Long id) throws ApplicationException {
        return this.repository.findById(id)
                              .orElseThrow(() -> new ApplicationException("Post inexistente"));
    }
}

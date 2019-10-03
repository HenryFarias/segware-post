package br.com.segware.post.service;

import br.com.segware.post.model.User;
import br.com.segware.post.respository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRespository repository;

    @Autowired
    public UserService(UserRespository repository) {
        this.repository = repository;
    }

    public User findByEmail(String email) {
        return repository.findByEmail(email);
    }

    public void save(User user) {
        this.repository.save(user);
    }

    public List<User> findAll() {
        return this.repository.findAll();
    }
}

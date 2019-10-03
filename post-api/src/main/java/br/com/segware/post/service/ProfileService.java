package br.com.segware.post.service;

import br.com.segware.post.exception.ApplicationException;
import br.com.segware.post.model.Profile;
import br.com.segware.post.respository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final ProfileRepository repository;

    @Autowired
    public ProfileService(ProfileRepository repository) {
        this.repository = repository;
    }

    public Profile findById(Long id) {
        return this.repository.findById(id)
                              .orElseThrow(() -> new ApplicationException("Perfil não encontrado"));
    }
}

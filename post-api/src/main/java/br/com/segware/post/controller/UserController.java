package br.com.segware.post.controller;

import br.com.segware.post.model.Profile;
import br.com.segware.post.model.User;
import br.com.segware.post.request.UserInsertRequest;
import br.com.segware.post.response.UserResponse;
import br.com.segware.post.service.ProfileService;
import br.com.segware.post.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;

@Api(value = "Api REST de usuários")
@RestController
@RequestMapping(path = "/user")
public class UserController {

    private final UserService service;
    private final ModelMapper modelMapper;
    private final ProfileService profileService;

    @Autowired
    public UserController(UserService service, ModelMapper modelMapper, ProfileService profileService) {
        this.service = service;
        this.modelMapper = modelMapper;
        this.profileService = profileService;
    }

    @ApiOperation(value = "Salvar usuário")
    @PostMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @Secured("ROLE_POST_GRANT_ALL")
    public void save(@RequestBody @Valid UserInsertRequest userRequest) {
        ModelMapper modelMapper = new ModelMapper();
        Profile profile = profileService.findById(userRequest.getProfileId());
        modelMapper.addMappings(new PropertyMap<UserInsertRequest, User>() {
            @Override
            protected void configure() {
                map().setProfile(profile);
            }
        });
        this.service.save(modelMapper.map(userRequest, User.class));
    }

    @ApiOperation(value = "Listar todos os usuário")
    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_POST_GRANT_ALL")
    public List<UserResponse> get() {
        Type targetListType = new TypeToken<List<UserResponse>>() {}.getType();
        List<User> users = this.service.findAll();
        return modelMapper.map(users, targetListType);
    }
}

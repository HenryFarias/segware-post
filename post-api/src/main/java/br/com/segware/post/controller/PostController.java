package br.com.segware.post.controller;

import br.com.segware.post.InfiniteScrollPage;
import br.com.segware.post.InfiniteScrollPageable;
import br.com.segware.post.model.Post;
import br.com.segware.post.request.PostSaveRequest;
import br.com.segware.post.response.PostListResponse;
import br.com.segware.post.service.PostService;
import com.mashape.unirest.http.exceptions.UnirestException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

@Api(value = "Api REST de usuários")
@RestController
@RequestMapping(path = "/post")
public class PostController {

    private final PostService service;
    private final ModelMapper modelMapper;

    @Autowired
    public PostController(PostService service, ModelMapper modelMapper) {
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @ApiImplicitParams({
        @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Página de resultados que você deseja buscar (0..N)"),
        @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Número de registros por página."),
        @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query",
                value = "Ordenação no seguinte formato: property(,asc|desc). " +
                        "Ordenação Deafault é por upVote ")
    })
    @ApiOperation(value = "Listagem com paginação de posts")

    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public InfiniteScrollPage<PostListResponse> list(
        @PageableDefault(page = 0, size = 5)
        InfiniteScrollPageable pageable) {
        Type targetListType = new TypeToken<List<PostListResponse>>() {}.getType();
        Page<Post> posts = service.findAll(pageable);
        return new InfiniteScrollPage<>(modelMapper.map(posts.getContent(), targetListType), pageable, posts.getTotalElements());
    }

    @ApiOperation(value = "Salvar posts")
    @PostMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody @Valid PostSaveRequest request) throws UnirestException, IOException {
        this.service.save(modelMapper.map(request, Post.class));
    }

    @ApiOperation(value = "Adicionar um upVote ao post")
    @PostMapping(value = "/{id}/add/upVote", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public void addUpVote(@PathVariable Long id) {
        this.service.addUpVote(id);
    }

    @ApiOperation(value = "Retirar um upVote do post")
    @PostMapping(value = "/{id}/remove/upVote", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public void removeUpVote(@PathVariable Long id) {
        this.service.removeUpVote(id);
    }

    @ApiOperation(value = "Excluir post")
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }
}

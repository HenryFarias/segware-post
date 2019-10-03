package br.com.segware.post.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class PostSaveRequest {

    @NotNull(message = "Descrição é obrigatório")
    private String description;

}

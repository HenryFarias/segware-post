package br.com.segware.post.configuration;

import br.com.segware.post.response.UserResponse;
import com.fasterxml.classmate.TypeResolver;
import com.google.common.collect.Multimap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import springfox.documentation.builders.ApiListingBuilder;
import springfox.documentation.builders.OperationBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiDescription;
import springfox.documentation.service.ApiListing;
import springfox.documentation.service.Operation;
import springfox.documentation.spring.web.plugins.DocumentationPluginsManager;
import springfox.documentation.spring.web.readers.operation.CachingOperationNameGenerator;
import springfox.documentation.spring.web.scanners.ApiDescriptionReader;
import springfox.documentation.spring.web.scanners.ApiListingScanner;
import springfox.documentation.spring.web.scanners.ApiListingScanningContext;
import springfox.documentation.spring.web.scanners.ApiModelReader;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class FormLoginOperations extends ApiListingScanner
{
    @Autowired
    private TypeResolver typeResolver;

    @Autowired
    public FormLoginOperations(ApiDescriptionReader apiDescriptionReader, ApiModelReader apiModelReader, DocumentationPluginsManager pluginsManager) {
        super(apiDescriptionReader, apiModelReader, pluginsManager);
    }

    @Override
    public Multimap<String, ApiListing> scan(ApiListingScanningContext context) {
        final Multimap<String, ApiListing> def = super.scan(context);

        final List<ApiDescription> apis = new LinkedList<>();

        final List<Operation> operations = new ArrayList<>();
        operations.add(new OperationBuilder(new CachingOperationNameGenerator())
                .method(HttpMethod.POST)
                .uniqueId("login")
//                .responseMessages(responseMessages())
                .responseModel(new ModelRef(UserResponse.class.getSimpleName()))
                .parameters(
                    Arrays.asList(new ParameterBuilder()
                            .name("username")
                            .description("The username")
                            .parameterType("body")
                            .type(typeResolver.resolve(String.class))
                            .modelRef(new ModelRef("string"))
                            .build(),
                    new ParameterBuilder()
                            .name("password")
                            .description("The password")
                            .parameterType("query")
                            .type(typeResolver.resolve(String.class))
                            .modelRef(new ModelRef("string"))
                            .build())
                )
                .summary("Log in") //
                .notes("Here you can log in")
                .build());
        apis.add(new ApiDescription("/login", "Authentication documentation", operations, false));

        def.put("authentication", new ApiListingBuilder(context.getDocumentationContext().getApiDescriptionOrdering())
                .apis(apis)
                .description("Custom authentication")
                .build());

        return def;
    }

//    private Set<ResponseMessage> responseMessages() {
//        return Collections.singleton(new ResponseMessageBuilder()
//                .code(200)
//                .message("Successfully received bug 1767 or 2219 response")
//                .responseModel(new ModelRef("string"))
//                .build());
//    }
}

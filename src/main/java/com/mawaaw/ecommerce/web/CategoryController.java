package com.mawaaw.ecommerce.web;

import com.mawaaw.ecommerce.dao.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class CategoryController {

    private CategoryRepository categoryRepository;

    @GetMapping("/categoriesName")
    public List<String> findName() {
        
        List<String> categoriesName = new ArrayList<>();
        categoryRepository.findAll().forEach(category -> categoriesName.add(category.getName()));
        return categoriesName;
    }
}

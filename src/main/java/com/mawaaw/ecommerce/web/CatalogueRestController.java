package com.mawaaw.ecommerce.web;

import com.mawaaw.ecommerce.dao.CategoryRepository;
import com.mawaaw.ecommerce.dao.ProductRepository;
import com.mawaaw.ecommerce.entities.Product;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class CatalogueRestController {

    private CategoryRepository categoryRepository;

    private ProductRepository productRepository;

    @GetMapping("/categoriesName")
    public List<String> findName() {

        List<String> categoriesName = new ArrayList<>();
        categoryRepository.findAll().forEach(category -> categoriesName.add(category.getName()));
        return categoriesName;
    }

    @GetMapping(path="/photoProduct/{id}",produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
        Product p=productRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"\\desktop\\ecom\\products\\"+p.getPhotoName()));
    }

    @PostMapping(path = "/uploadPhoto/{id}")
    public void uploadPhoto(MultipartFile file, @PathVariable Long id) throws Exception{
        Product p=productRepository.findById(id).get();
        p.setPhotoName(file.getOriginalFilename());
        Files.write(Paths.get(System.getProperty("user.home")+"\\desktop\\ecom\\products\\"+p.getPhotoName()),file.getBytes());
        productRepository.save(p);
    }
}

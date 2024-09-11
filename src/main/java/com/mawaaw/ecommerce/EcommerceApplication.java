package com.mawaaw.ecommerce;

import com.mawaaw.ecommerce.dao.CategoryRepository;
import com.mawaaw.ecommerce.dao.ProductRepository;
import com.mawaaw.ecommerce.entities.Category;
import com.mawaaw.ecommerce.entities.Product;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {

		System.out.println("----------------------->" + System.getProperty("user.home")+"\\desktop\\ecom\\products\\");
		SpringApplication.run(EcommerceApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(ProductRepository productRepository, CategoryRepository categoryRepository, RepositoryRestConfiguration repositoryRestConfiguration) {

		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Product.class,Category.class);
			categoryRepository.save(new Category(null,"Computers", null, null,null));
			categoryRepository.save(new Category(null, "Printers", null, null,null));
			categoryRepository.save(new Category(null, "Smartphones",null, null, null));

			Random random=new Random();
			categoryRepository.findAll().forEach(c->{
				for(int i=0; i<10; i++) {
					Product p = new Product();
					p.setName(UUID.randomUUID().toString());
					p.setCurrentPrice(100 + random.nextInt(10000));
					p.setPromotion(random.nextBoolean());
					p.setAvailable(random.nextBoolean());
					p.setSelected(random.nextBoolean());
					p.setCategory(c);
					productRepository.save(p);
				}
			});
		};
	}
}

package com.backend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.backend.models.Domaine;
import com.backend.repository.DomaineRepository;


@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class DomaineController {
	@Autowired
	DomaineRepository domaineRepo;

	@GetMapping("/domaines")

	public List<Domaine> getAllDomaines() {
		List<Domaine> dom = domaineRepo.findAll();
	    return dom;
	}

	@PostMapping("/addDomaine")
	public Domaine createDomaine(@RequestBody Domaine domaine) {
	    return domaineRepo.save(domaine);
	}

	@GetMapping("/domaine/{id}")
	public Domaine getDomaineById(@PathVariable(value = "id") Long Id) {
	    return domaineRepo.findById(Id).orElseThrow(null);
	}


	@PutMapping("/updateDomaine/{id}")
	public Domaine updateDomaine(@PathVariable(value = "id") Long Id, @RequestBody Domaine domaineDetails) {

		Domaine domaine = domaineRepo.findById(Id).orElseThrow(null);
	    
		domaine.setLibelle(domaineDetails.getLibelle());

		Domaine updatedDomaine = domaineRepo.save(domaine);
	    return updatedDomaine;
	}

	@DeleteMapping("/deleteDomaine/{id}")
	public ResponseEntity<?> deleteDomaine(@PathVariable(value = "id") Long Id) {
		Domaine domaine = domaineRepo.findById(Id).orElseThrow(null);

		domaineRepo.delete(domaine);

	    return ResponseEntity.ok().build();
	}

}
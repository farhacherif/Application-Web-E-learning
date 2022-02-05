package com.backend.repository;


import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.models.Session;



public interface SessionRepository extends JpaRepository<Session, Long> {
	
	List<Session> findByFormateurId(Long formateurId);
    Optional<Session> findByIdAndFormateurId(Long id, Long formateurId);
    // Optional<Session> findByParticipants(Long particpantId);

}

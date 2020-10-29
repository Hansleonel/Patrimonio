package pe.gob.mindef.app.web.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.gob.mindef.app.domain.Motivo;
import pe.gob.mindef.app.service.MotivoService;

import java.util.List;

/**
 * REST controller for managing Motivo.
 */
@RestController
@RequestMapping("/api")
public class MotivoResource {

    private final MotivoService motivoService;

    public MotivoResource(MotivoService motivoService) {
        this.motivoService = motivoService;
    }

    @GetMapping("/motivos")
    public ResponseEntity<List<Motivo>> getAll(@RequestParam Long proceso) throws InterruptedException {
        List<Motivo> motivos = motivoService.findAll(proceso);
        return new ResponseEntity<>(motivos, HttpStatus.OK);
    }

}

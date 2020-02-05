package pe.gob.mindef.app.web.rest;

import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.gob.mindef.app.domain.Asignacion;
import pe.gob.mindef.app.service.AsignacionService;
import pe.gob.mindef.app.web.rest.errors.BadRequestAlertException;
import pe.gob.mindef.app.web.rest.util.HeaderUtil;
import pe.gob.mindef.app.web.rest.util.PaginationUtil;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Asignacion.
 */
@RestController
@RequestMapping("/api")
public class AsignacionResource {

    private final Logger log = LoggerFactory.getLogger(AsignacionResource.class);

    private static final String ENTITY_NAME = "asignacion";

    private final AsignacionService asignacionService;

    public AsignacionResource(AsignacionService asignacionService) {
        this.asignacionService = asignacionService;
    }


    /**
     * POST  /asignacion : Create a new asignacion.
     *
     * @param asignacion the asignacion to create
     * @return the ResponseEntity with status 201 (Created) and with body the new asignacion, or with status 400 (Bad Request) if the office has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/asignacion")
    public ResponseEntity<Asignacion> createAsignacion(@Valid @RequestBody Asignacion asignacion) throws URISyntaxException {
        log.debug("REST request to save asignacion : {}", asignacion);
        if (asignacion.getId_asignacion() != null) {
            throw new BadRequestAlertException("A new asignacion cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Asignacion result = asignacionService.save(asignacion);
        return ResponseEntity.created(new URI("/api/asignacion/" + result.getId_asignacion()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId_asignacion().toString()))
            .body(result);
    }

    /**
     * PUT  /asignacion : Updates an existing asignacion.
     *
     * @param asignacion the asignacion to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated asignacion,
     * or with status 400 (Bad Request) if the asignacion is not valid,
     * or with status 500 (Internal Server Error) if the asignacion couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/asignacion")

    public ResponseEntity<Asignacion> updateAsignacion(@RequestBody Asignacion asignacion) throws URISyntaxException {
        log.debug("REST request to update asignacion : {}", asignacion);
        if (asignacion.getId_asignacion() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Asignacion result = asignacionService.save(asignacion);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, asignacion.getId_asignacion().toString()))
            .body(result);
    }


    /**
     * GET  /asignacion : get all the asignacion.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of asignacion in body
     */
    @GetMapping("/asignacion")
    public ResponseEntity<List<Asignacion>> getAllAsignacion(Pageable pageable) throws InterruptedException {
        log.debug("REST request to get a page of Asignacion");
        Page<Asignacion> page = asignacionService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/asignacion");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /asignacion/:id : get the "id" asignacion.
     *
     * @param id the id of the asignacion to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the asignacion, or with status 404 (Not Found)
     */
    @GetMapping("/asignacion/{id}")
    public ResponseEntity<Asignacion> getAsignacion(@PathVariable Long id) {
        log.debug("REST request to get Asignacion : {}", id);
        Optional<Asignacion> asignacion = asignacionService.findOne(id);
        return ResponseUtil.wrapOrNotFound(asignacion);
    }

    /**
     * DELETE  /asignacion/:id : delete the "id" asignacion.
     *
     * @param id the id of the asignacion to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/asignacion/{id}")
    public ResponseEntity<Void> deleteAsignacion(@PathVariable Long id) {
        log.debug("REST request to delete Asignacion : {}", id);
        asignacionService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }


}

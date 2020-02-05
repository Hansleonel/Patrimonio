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
import pe.gob.mindef.app.domain.Proceso;
import pe.gob.mindef.app.service.ProcesoService;
import pe.gob.mindef.app.web.rest.errors.BadRequestAlertException;
import pe.gob.mindef.app.web.rest.util.HeaderUtil;
import pe.gob.mindef.app.web.rest.util.PaginationUtil;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Proceso.
 */
@RestController
@RequestMapping("/api")
public class ProcesoResource {

    private final Logger log = LoggerFactory.getLogger(ProcesoResource.class);

    private static final String ENTITY_NAME = "proceso";

    private final ProcesoService procesoService;

    public ProcesoResource(ProcesoService procesoService) {
        this.procesoService = procesoService;
    }


    /**
     * POST  /proceso : Create a new proceso.
     *
     * @param proceso the proceso to create
     * @return the ResponseEntity with status 201 (Created) and with body the new proceso, or with status 400 (Bad Request) if the office has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/proceso")
    public ResponseEntity<Proceso> createProceso(@Valid @RequestBody Proceso proceso) throws URISyntaxException {
        log.debug("REST request to save proceso : {}", proceso);
        if (proceso.getId_proceso() != null) {
            throw new BadRequestAlertException("A new proceso cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Proceso result = procesoService.save(proceso);
        return ResponseEntity.created(new URI("/api/proceso/" + result.getId_proceso()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId_proceso().toString()))
            .body(result);
    }

    /**
     * PUT  /proceso : Updates an existing proceso.
     *
     * @param proceso the proceso to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated proceso,
     * or with status 400 (Bad Request) if the proceso is not valid,
     * or with status 500 (Internal Server Error) if the proceso couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/proceso")
    public ResponseEntity<Proceso> updateProceso(@RequestBody Proceso proceso) throws URISyntaxException {
        log.debug("REST request to update proceso : {}", proceso);
        if (proceso.getId_proceso() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Proceso result = procesoService.save(proceso);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, proceso.getId_proceso().toString()))
            .body(result);
    }


    /**
     * GET  /proceso : get all the proceso.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of proceso in body
     */
    @GetMapping("/proceso")
    public ResponseEntity<List<Proceso>> getAllProceso(Pageable pageable) throws InterruptedException {
        log.debug("REST request to get a page of Proceso");
        Page<Proceso> page = procesoService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/proceso");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /proceso/:id : get the "id" proceso.
     *
     * @param id the id of the proceso to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the proceso, or with status 404 (Not Found)
     */
    @GetMapping("/proceso/{id}")
    public ResponseEntity<Proceso> getProceso(@PathVariable Long id) {
        log.debug("REST request to get Proceso : {}", id);
        Optional<Proceso> proceso = procesoService.findOne(id);
        return ResponseUtil.wrapOrNotFound(proceso);
    }

    /**
     * DELETE  /proceso/:id : delete the "id" proceso.
     *
     * @param id the id of the proceso to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/proceso/{id}")
    public ResponseEntity<Void> deleteProceso(@PathVariable Long id) {
        log.debug("REST request to delete Proceso : {}", id);
        procesoService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }


}

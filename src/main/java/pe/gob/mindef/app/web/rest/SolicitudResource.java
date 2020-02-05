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
import pe.gob.mindef.app.domain.Solicitud;
import pe.gob.mindef.app.service.SolicitudService;
import pe.gob.mindef.app.web.rest.errors.BadRequestAlertException;
import pe.gob.mindef.app.web.rest.util.HeaderUtil;
import pe.gob.mindef.app.web.rest.util.PaginationUtil;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Solicitud.
 */
@RestController
@RequestMapping("/api")
public class SolicitudResource {

    private final Logger log = LoggerFactory.getLogger(SolicitudResource.class);

    private static final String ENTITY_NAME = "solicitud";

    private final SolicitudService solicitudService;

    public SolicitudResource(SolicitudService solicitudService) {
        this.solicitudService = solicitudService;
    }


    /**
     * POST  /solicitud : Create a new solicitud.
     *
     * @param solicitud the solicitud to create
     * @return the ResponseEntity with status 201 (Created) and with body the new solicitud, or with status 400 (Bad Request) if the solicitud has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/solicitud")
    public ResponseEntity<Solicitud> createSolicitud(@Valid @RequestBody Solicitud solicitud) throws URISyntaxException {
        log.debug("REST request to save solicitud : {}", solicitud);
        if (solicitud.getId_solicitud() != null) {
            throw new BadRequestAlertException("A new solicitud cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Solicitud result = solicitudService.save(solicitud);
        return ResponseEntity.created(new URI("/api/solicitud/" + result.getId_solicitud()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId_solicitud().toString()))
            .body(result);
    }

    /**
     * PUT  /solicitud : Updates an existing solicitud.
     *
     * @param solicitud the solicitud to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated solicitud,
     * or with status 400 (Bad Request) if the solicitud is not valid,
     * or with status 500 (Internal Server Error) if the solicitud couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/solicitud")
    public ResponseEntity<Solicitud> updateSolicitud(@RequestBody Solicitud solicitud) throws URISyntaxException {
        log.debug("REST request to update solicitud : {}", solicitud);
        if (solicitud.getId_solicitud() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Solicitud result = solicitudService.save(solicitud);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, solicitud.getId_solicitud().toString()))
            .body(result);
    }


    /**
     * GET  /solicitud : get all the solicitud.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of solicitud in body
     */
    @GetMapping("/solicitud")
    public ResponseEntity<List<Solicitud>> getAllSolicitud(Pageable pageable) throws InterruptedException {
        log.debug("REST request to get a page of Solicitud");
        Page<Solicitud> page = solicitudService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/solicitud");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @PatchMapping("/solicitudRevisar/{id}")
    public ResponseEntity<Solicitud> patchPendienteRevisado(@PathVariable Long id, @RequestBody Solicitud solicitud) throws URISyntaxException {
        log.debug("REST request to patch solicitud : {}", solicitud);

        Optional<Solicitud> solicitudPatch = solicitudService.findOne(id);
        log.debug("ESTADO DE LA SOLICITUD" + solicitud.getEstado(), solicitud.getEstado());
        if (solicitudPatch.get().getEstado() == 1) {
            solicitudPatch.get().setEstado(2);
        }


        Solicitud result = solicitudService.save(solicitudPatch.get());
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, solicitud.toString()))
            .body(result);
    }

    /**
     * GET  /solicitud/:id : get the "id" solicitud.
     *
     * @param id the id of the solicitud to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the solicitud, or with status 404 (Not Found)
     */
    @GetMapping("/solicitud/{id}")
    public ResponseEntity<Solicitud> getSolicitud(@PathVariable Long id) {
        log.debug("REST request to get Solicitud : {}", id);
        Optional<Solicitud> solicitud = solicitudService.findOne(id);
        return ResponseUtil.wrapOrNotFound(solicitud);
    }

    /**
     * DELETE  /solicitud/:id : delete the "id" solicitud.
     *
     * @param id the id of the solicitud to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/solicitud/{id}")
    public ResponseEntity<Void> deleteSolicitud(@PathVariable Long id) {
        log.debug("REST request to delete Solicitud : {}", id);
        solicitudService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }


}

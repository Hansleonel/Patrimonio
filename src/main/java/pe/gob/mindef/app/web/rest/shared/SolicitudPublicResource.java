package pe.gob.mindef.app.web.rest.shared;

import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import pe.gob.mindef.app.domain.Solicitud;
import pe.gob.mindef.app.repository.UserRepository;
import pe.gob.mindef.app.service.SolicitudService;
import pe.gob.mindef.app.web.rest.errors.BadRequestAlertException;
import pe.gob.mindef.app.web.rest.util.HeaderUtil;
import pe.gob.mindef.app.web.rest.util.PaginationUtil;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Solicitud.
 */
@RestController
@RequestMapping("/api")
public class SolicitudPublicResource {

    private final Logger log = LoggerFactory.getLogger(SolicitudPublicResource.class);

    private static final String ENTITY_NAME = "solicitud";

    private final SolicitudService solicitudService;
    private final UserRepository userRepository;

    public SolicitudPublicResource(SolicitudService solicitudService, UserRepository userRepository) {
        this.solicitudService = solicitudService;
        this.userRepository = userRepository;
    }

    @GetMapping("/solicitudes/{dni}")
    public ResponseEntity<List<Solicitud>> getAllSolicitud(@PathVariable String dni, Pageable pageable) throws InterruptedException {

        Page<Solicitud> page = solicitudService.getSolicitudByUser(pageable, dni);

        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/solicitudes");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }


    /**
     * POST  /solicitud : Create a new solicitud.
     *
     * @param solicitud the solicitud to create
     * @return the ResponseEntity with status 201 (Created) and with body the new solicitud, or with status 400 (Bad Request) if the solicitud has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/solicitudDesplazamiento")
    public ResponseEntity<Solicitud> createSolicitud(@Valid @RequestBody Solicitud solicitud) throws URISyntaxException {
        log.debug("REST request to save solicitud : {}", solicitud);
        if (solicitud.getId_solicitud() != null) {
            throw new BadRequestAlertException("A new solicitud cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Solicitud result = solicitudService.saveDesplazamiento(solicitud, Arrays.asList(746490010070L));
        return ResponseEntity.created(new URI("/api/solicitudDesplazamiento/" + result.getId_solicitud()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId_solicitud().toString()))
            .body(result);
    }

    @PatchMapping("/solicitudDesplazamientoRetorno/{id}")
    public ResponseEntity<Solicitud> patchDesplazamientoRetorno(@PathVariable Long id) throws URISyntaxException {

        Optional<Solicitud> solicitudPatch = solicitudService.findOne(id);
        // solicitudPatch.get().setFecha_finalizdo(new Date());
        if (solicitudPatch.get().getEstado() == 3) {
            solicitudPatch.get().setFechaFinalizado(new Date());
            solicitudPatch.get().setEstado(5);
        }

        Solicitud result = solicitudService.save(solicitudPatch.get());
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, solicitudPatch.get().toString()))
            .body(result);
    }

    /**
     * GET  /solicitud/:id : get the "id" solicitud.
     *
     * @param id the id of the solicitud to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the solicitud, or with status 404 (Not Found)
     */
    @GetMapping("/solicitudDesplazamiento/{id}")
    public ResponseEntity<Solicitud> getSolicitud(@PathVariable Long id) {
        log.debug("REST request to get Solicitud : {}", id);
        Optional<Solicitud> solicitud = solicitudService.findOne(id);
        return ResponseUtil.wrapOrNotFound(solicitud);
    }

}

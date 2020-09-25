package pe.gob.mindef.app.web.rest;

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
import pe.gob.mindef.app.domain.DetalleDocumento;
import pe.gob.mindef.app.domain.Documento;
import pe.gob.mindef.app.service.DetalleDocumentoService;
import pe.gob.mindef.app.service.DocumentoService;
import pe.gob.mindef.app.web.rest.errors.BadRequestAlertException;
import pe.gob.mindef.app.web.rest.util.HeaderUtil;
import pe.gob.mindef.app.web.rest.util.PaginationUtil;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing DetalleDocumento.
 */
@RestController
@RequestMapping("/api")
public class DetalleDocumentoResource {

    private final Logger log = LoggerFactory.getLogger(DetalleDocumentoResource.class);

    private static final String ENTITY_NAME = "detalleDocumento";

    private final DetalleDocumentoService detalleDocumentoService;

    public DetalleDocumentoResource(DetalleDocumentoService detalleDocumentoService) {
        this.detalleDocumentoService = detalleDocumentoService;
    }


    /**
     * POST  /detalleDocumento : Create a new detalleDocumento.
     *
     * @param detalleDocumento the detalleDocumento to create
     * @return the ResponseEntity with status 201 (Created) and with body the new detalleDocumento, or with status 400 (Bad Request) if the detalleDocumento has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/detalleDocumento")
    public ResponseEntity<DetalleDocumento> createDetalleDocumento(@Valid @RequestBody DetalleDocumento detalleDocumento) throws URISyntaxException {
        log.debug("REST request to save detalleDocumento : {}", detalleDocumento);
        if (detalleDocumento.getIdDetalleDocumento() != null) {
            throw new BadRequestAlertException("A new detalleDocumento cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DetalleDocumento result = detalleDocumentoService.save(detalleDocumento);
        return ResponseEntity.created(new URI("/api/detalleDocumento/" + result.getIdDetalleDocumento()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getIdDetalleDocumento().toString()))
            .body(result);
    }

    /**
     * PUT  /detalleDocumento : Updates an existing detalleDocumento.
     *
     * @param detalleDocumento the detalleDocumento to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated detalleDocumento,
     * or with status 400 (Bad Request) if the detalleDocumento is not valid,
     * or with status 500 (Internal Server Error) if the detalleDocumento couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/detalleDocumento")
    public ResponseEntity<DetalleDocumento> updateDetalleDocumento(@RequestBody DetalleDocumento detalleDocumento) throws URISyntaxException {
        log.debug("REST request to update detalleDocumento : {}", detalleDocumento);
        if (detalleDocumento.getIdDetalleDocumento() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        DetalleDocumento result = detalleDocumentoService.save(detalleDocumento);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, detalleDocumento.getIdDetalleDocumento().toString()))
            .body(result);
    }


    /**
     * GET  /detalleDocumento : get all the detalleDocumento.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of detalleDocumento in body
     */
    @GetMapping("/detalleDocumento")
    public ResponseEntity<List<DetalleDocumento>> getAllDetalleDocumento(Pageable pageable) throws InterruptedException {

        Page<DetalleDocumento> page = detalleDocumentoService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/detalleDocumento");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /detalleDocumento/:id : get the "id" detalleDocumento.
     *
     * @param id the id of the detalleDocumento to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the detalleDocumento, or with status 404 (Not Found)
     */
    @GetMapping("/detalleDocumento/{id}")
    public ResponseEntity<DetalleDocumento> getDetalleDocumento(@PathVariable Long id) {
        log.debug("REST request to get DetalleDocumento : {}", id);
        Optional<DetalleDocumento> detalleDocumento = detalleDocumentoService.findOne(id);
        return ResponseUtil.wrapOrNotFound(detalleDocumento);
    }

    /**
     * DELETE  /detalleDocumento/:id : delete the "id" detalleDocumento.
     *
     * @param id the id of the detalleDocumento to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/detalleDocumento/{id}")
    public ResponseEntity<Void> deleteDetalleDocumento(@PathVariable Long id) {
        log.debug("REST request to delete DetalleDocumento : {}", id);
        detalleDocumentoService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }


}

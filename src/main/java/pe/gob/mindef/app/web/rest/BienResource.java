package pe.gob.mindef.app.web.rest;

import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.gob.mindef.app.domain.Bien;
import pe.gob.mindef.app.security.AuthoritiesConstants;
import pe.gob.mindef.app.service.BienService;
import pe.gob.mindef.app.web.rest.errors.BadRequestAlertException;
import pe.gob.mindef.app.web.rest.util.HeaderUtil;
import pe.gob.mindef.app.web.rest.util.PaginationUtil;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * REST controller for managing Bien.
 */
@RestController
@RequestMapping("/api")
public class BienResource {

    private final Logger log = LoggerFactory.getLogger(BienResource.class);

    private static final String ENTITY_NAME = "bien";

    private final BienService bienService;

    public BienResource(BienService bienService) {
        this.bienService = bienService;
    }

    @PostMapping("/testAPI")
    public ResponseEntity testAPI(@RequestBody Map map) throws URISyntaxException {
        return ResponseEntity.created(new URI("/test")).body(map);
    }

    /**
     * POST  /bien : Create a new bien.
     *
     * @param bien the bien to create
     * @return the ResponseEntity with status 201 (Created) and with body the new bien, or with status 400 (Bad Request) if the office has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/bien")
    //@PreAuthorize("hasRole(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Bien> createBien(@Valid @RequestBody Bien bien) throws URISyntaxException {
        log.debug("REST request to save bien : {}", bien);
        /*if (bien.getId_patrimonio() != null) {
            throw new BadRequestAlertException("A new bien cannot already have an ID", ENTITY_NAME, "idexists");
        }*/
        Bien result = bienService.save(bien);
        return ResponseEntity.created(new URI("/api/bien/" + result.getId_patrimonio()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId_patrimonio().toString()))
            .body(result);
    }

    /**
     * PUT  /bien : Updates an existing bien.
     *
     * @param bien the bien to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated bien,
     * or with status 400 (Bad Request) if the bien is not valid,
     * or with status 500 (Internal Server Error) if the bien couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/bien")

    public ResponseEntity<Bien> updateBien(@RequestBody Bien bien) throws URISyntaxException {
        log.debug("REST request to update bien : {}", bien);
        if (bien.getId_patrimonio() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Bien result = bienService.save(bien);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, bien.getId_patrimonio().toString()))
            .body(result);
    }

    /*@PutMapping("/invitadoAntecedenteGeneral")
    @Async

    public void updateInvitadoAntecedenteGeneral(@RequestBody String[] IDS) throws URISyntaxException {
        log.debug("REST request to get InvitadoAntecedenteGeneral : {}", IDS);
        int valor = 0;
        for (int i = 0; i < IDS.length; i++) {
            Long id = Long.parseLong(IDS[i]);

            Optional<Invitado> invitadoAntecedenteGeneral = invitadoService.findOne(id);

            // JSONObject jsonRespuesta = XML.toJSONObject(response01);
            // log.debug("RESPUESTA JSON" + jsonRespuesta.getJSONObject("S:Envelope").getJSONObject("S:Body").getJSONObject("ns0:consultarPersonaNroDocResponse").getJSONObject("RespuestaPersona").get("descripcionMensaje").toString());

            if (invitadoAntecedenteGeneral.get().getAntecedenteP() != null) {

            } else if (invitadoAntecedenteGeneral.get().getNumeroDocu().length() == 8) {
                String dni = invitadoAntecedenteGeneral.get().getNumeroDocu();
                int numeroAntecedentes = 0;
                log.debug("CONSULTADO ANTECEDENTES PENALES");
                HttpHeaders httpHeaders = new HttpHeaders();
                httpHeaders.set("Content-Type", "application/json");

                JSONObject parameter = new JSONObject();
                parameter.put("codeValidation", "4cf48612e669cbdc292fd25d5a7ede97");
                parameter.put("dni", dni);
                parameter.put("dniUsuario", "42821312");

                HttpEntity<String> httpEntity = new HttpEntity<>(parameter.toString(), httpHeaders);

                RestTemplate restTemplate = new RestTemplate();
                String response = restTemplate.postForObject("http://10.24.9.78:80/webservice/rest/getPersonaByPide", httpEntity, String.class);

                JSONObject jsonObject = new JSONObject(response);
                String nroDni = jsonObject.getString("dni");
                String nombres = jsonObject.getString("nombres");
                String nombre01;
                int a = nombres.indexOf(" ");
                log.debug("EL INDEX DEL ESPACIO ES" + a);

                if (a == -1) {
                    nombre01 = nombres;
                } else {
                    String[] nombreArray = nombres.split(" ");
                    nombre01 = nombreArray[0];
                    String nombre02 = nombreArray[1];
                }
                String apellidoP = jsonObject.getString("apPaterno");
                String apellidoM = jsonObject.getString("apMaterno");

                RestTemplate restTemplate01 = new RestTemplate();
                String responsePenales = restTemplate01.getForObject("https://ws3.pide.gob.pe/Rest/PJ/APenales?xApellidoPaterno=" + apellidoP + "&xApellidoMaterno=" + apellidoM + "&xNombre1=" + nombre01 + "&xDni=" + nroDni + "&xMotivoConsulta=Por%20proceso%20judicial%20en%20el%20PoderJudicial&xProcesoEntidadConsultante=00001-2015-0-0901-JR-PE-01&xRucEntidadConsultante=20131367938&xIpPublica=200.37.34.88&xDniPersonaConsultante=46879131&xAudNombrePC=PCHERRERA&xAudNombreUsuario=JHERRERA&xAudDireccionMAC=8C-DC-D4-39-8D-A9&xAudIP=10.25.23.231", String.class);

                RestTemplate restTemplate02 = new RestTemplate();
                String responseJudiciales = restTemplate02.getForObject("https://ws3.pide.gob.pe/Rest/Inpe/AJudiciales?apepat=" + apellidoP + "&apemat=" + apellidoM + "&nombres=" + nombre01, String.class);

                RestTemplate restTemplate04 = new RestTemplate();
                String responsePoliciales = restTemplate04.getForObject("https://ws3.pide.gob.pe/Rest/Pnp/APolicialPersonaNroDoc?clienteUsuario=PIDE_AP_MINDEF&clienteClave=D3F3NZ42019&servicioCodigo=WS_PIDE_ANTECEDENTES_FLAG&clienteSistema=SISTEMAENTIDAD&clienteIp=192.168.1.154&clienteMac=AA:BB:CC:DD:EE:FF&tipoDocUserClieFin=2&nroDocUserClieFin=07445287&nroDoc=" + dni, String.class);

                JSONObject jsonResponsePenales = XML.toJSONObject(responsePenales);
                JSONObject jsonResponseJudiciales = XML.toJSONObject(responseJudiciales);
                JSONObject jsonResponsePoliciales = XML.toJSONObject(responsePoliciales);

                // log.debug("Respuesta Antecedentes Penales" + jsonResponsePenales.toString());
                log.debug("Respuesta Antecedentes Judiciales" + jsonResponseJudiciales.toString());
                // log.debug("Respuesta Antecedentes Policiales" + jsonResponsePoliciales);

                String antecedenteJudicial = jsonResponseJudiciales.getJSONObject("getAntecedenteJudicialResponse").get("getAntecedenteJudicialReturn").toString();
                String antecedentePenal = jsonResponsePenales.getJSONObject("ns2:verificarAntecedentesPenalesResponse").get("xMensajeRespuesta").toString();
                String antecedentePolicial = jsonResponsePoliciales.getJSONObject("S:Envelope").getJSONObject("S:Body").getJSONObject("ns0:consultarPersonaNroDocResponse").getJSONObject("RespuestaPersona").get("descripcionMensaje").toString();

                if (antecedenteJudicial != null && antecedenteJudicial.startsWith("Observado")) {
                    log.debug("TIENE ANTECEDENTES JUDICIALES");
                    numeroAntecedentes = numeroAntecedentes + 1;
                }
                if (antecedenteJudicial != null && !antecedentePenal.equals("El registro indicado no cuenta con antecedentes penales.") || !antecedentePenal.startsWith("El apellido") || !antecedentePenal.startsWith("Se ha alcanzado")) {
                    log.debug("TIENE POSIBLES ANTECEDENTES PENALES");
                    numeroAntecedentes = numeroAntecedentes + 1;
                }
                if (antecedentePolicial != null && !antecedentePolicial.equals("No se encontró registros")) {
                    log.debug("TIENE ANTECEDENTES POLICIALES");
                    numeroAntecedentes = numeroAntecedentes + 1;
                }

                log.debug("REST request to update InvitadoAntecedenteGeneral : {}", invitadoAntecedenteGeneral);

                valor = numeroAntecedentes;
                if (numeroAntecedentes > 0) {
                    invitadoAntecedenteGeneral.get().setAntecedenteP(Integer.toString(numeroAntecedentes));
                }
            }
            invitadoService.save(invitadoAntecedenteGeneral.get());
            *//*return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, invitadoAntecedenteGeneral.get().getId_invitado().toString()))
                .body(result);*//*
        }
        *//*return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, invitadoAntecedenteGeneral.get().getId_invitado().toString()))
            .body(result);*//*

        // return valor;
    }
*/

    /**
     * GET  /bien : get all the bien.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of bien in body
     */
    @GetMapping("/bien")
    public ResponseEntity<List<Bien>> getAllBien(Pageable pageable) throws InterruptedException {
        log.debug("REST request to get a page of Bien");
        Page<Bien> page = bienService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/bien");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /*@GetMapping("/invitadoOrder")
    public ResponseEntity<List<Invitado>> getAllInvitadoOrder(Pageable pageable) throws InterruptedException {
        log.debug("REST request to get a page of Invitado");
        Page<Invitado> page = invitadoService.getOrderInvitado(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/invitadoOrder");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);

    }*/

    /**
     * GET  /bien/:id : get the "id" bien.
     *
     * @param id the id of the bien to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the bien, or with status 404 (Not Found)
     */
    @GetMapping("/bien/{id}")
    public ResponseEntity<Bien> getBien(@PathVariable Long id) {
        log.debug("REST request to get Bien : {}", id);
        Optional<Bien> bien = bienService.findOne(id);
        return ResponseUtil.wrapOrNotFound(bien);
    }

    /**
     * DELETE  /bien/:id : delete the "id" bien.
     *
     * @param id the id of the bien to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/bien/{id}")
    public ResponseEntity<Void> deleteBien(@PathVariable Long id) {
        log.debug("REST request to delete Bien : {}", id);
        bienService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }


}

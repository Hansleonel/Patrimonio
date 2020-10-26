package pe.gob.mindef.app.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_T_SOLICITUD")
// @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Solicitud implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_SOLICITUD")
    @SequenceGenerator(name = "SQ_SOLICITUD", sequenceName = "SQ_TT_SOLICITUD_ID", allocationSize = 1)
    @Column(name = "IDSOLICITUD")
    private Long id_solicitud;

    @Column(name = "OBSERVACION")
    private String observacion;

    @Column(name = "ESTADO")
    private int estado;

    @Column(name = "FECHASOLICITUD")
    private Date fecha_solicitud;

    @Column(name = "DOCIDEN")
    private String dociden;

    @Column(name = "AUTORIZADOR")
    private String autorizador;

    @ManyToOne(targetEntity = Proceso.class)
    @JoinColumn(name = "IDPROCESO", referencedColumnName = "IDPROCESO", foreignKey = @ForeignKey(name = "FK_SOLICITUD_PROCESO"))
    private Proceso proceso;

    @ManyToOne(targetEntity = Motivo.class)
    @JoinColumn(name = "IDMOTIVO", referencedColumnName = "IDMOTIVO", foreignKey = @ForeignKey(name = "FK_SOLICITUD_MOTIVO"))
    private Motivo motivo;

    @Column(name = "FECHAATENCION")
    private Date fecha_atencion;

    @Column(name = "FECHARESPUESTA")
    private Date fecha_respuesta;

    @Column(name = "FECHAFINALIZADO")
    private Date fechaFinalizado;

    @Column(name = "DESCRIPCIONRESPUESTA")
    private String descripcionRespuesta;

    @Column(name = "TIPO")
    private int tipo;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "solicitud", fetch = FetchType.EAGER)
    private Set<SolicitudDetalle> detalles = new HashSet<>();

    public Solicitud() {
    }

    public Long getId_solicitud() {
        return id_solicitud;
    }

    public void setId_solicitud(Long id_solicitud) {
        this.id_solicitud = id_solicitud;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public Date getFecha_solicitud() {
        return fecha_solicitud;
    }

    public void setFecha_solicitud(Date fecha_solicitud) {
        this.fecha_solicitud = fecha_solicitud;
    }

    public String getDociden() {
        return dociden;
    }

    public void setDociden(String dociden) {
        this.dociden = dociden;
    }

    public Proceso getProceso() {
        return proceso;
    }

    public void setProceso(Proceso proceso) {
        this.proceso = proceso;
    }

    public Motivo getMotivo() {
        return motivo;
    }

    public void setMotivo(Motivo motivo) {
        this.motivo = motivo;
    }

    public Date getFecha_atencion() {
        return fecha_atencion;
    }

    public void setFecha_atencion(Date fecha_atencion) {
        this.fecha_atencion = fecha_atencion;
    }

    public Date getFecha_respuesta() {
        return fecha_respuesta;
    }

    public void setFecha_respuesta(Date fecha_respuesta) {
        this.fecha_respuesta = fecha_respuesta;
    }

    public Date getFechaFinalizado() {
        return fechaFinalizado;
    }

    public void setFechaFinalizado(Date fechaFinalizado) {
        this.fechaFinalizado = fechaFinalizado;
    }

    public String getDescripcionRespuesta() {
        return descripcionRespuesta;
    }

    public void setDescripcionRespuesta(String descripcionRespuesta) {
        this.descripcionRespuesta = descripcionRespuesta;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getAutorizador() {
        return autorizador;
    }

    public void setAutorizador(String autorizador) {
        this.autorizador = autorizador;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Solicitud))
            return false;
        Solicitud solicitud = (Solicitud) o;
        return getEstado() == solicitud.getEstado() && getTipo() == solicitud.getTipo()
                && Objects.equals(getId_solicitud(), solicitud.getId_solicitud())
                && Objects.equals(getObservacion(), solicitud.getObservacion())
                && Objects.equals(getFecha_solicitud(), solicitud.getFecha_solicitud())
                && Objects.equals(getDociden(), solicitud.getDociden())
                && Objects.equals(getProceso(), solicitud.getProceso())
                && Objects.equals(getMotivo(), solicitud.getMotivo())
                && Objects.equals(getFecha_atencion(), solicitud.getFecha_atencion())
                && Objects.equals(getFecha_respuesta(), solicitud.getFecha_respuesta())
                && Objects.equals(getFechaFinalizado(), solicitud.getFechaFinalizado())
                && Objects.equals(getDescripcionRespuesta(), solicitud.getDescripcionRespuesta());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_solicitud(), getObservacion(), getEstado(), getFecha_solicitud(), getDociden(),
                getProceso(), getMotivo(), getFecha_atencion(), getFecha_respuesta(), getFechaFinalizado(),
                getDescripcionRespuesta(), getTipo());
    }

    @Override
    public String toString() {
        return "Solicitud{" + "id_solicitud=" + id_solicitud + ", observacion='" + observacion + '\'' + ", estado="
                + estado + ", fecha_solicitud=" + fecha_solicitud + ", dociden='" + dociden + '\'' + ", proceso="
                + proceso + ", motivo=" + motivo + ", fecha_atencion=" + fecha_atencion + ", fecha_respuesta="
                + fecha_respuesta + ", fechaFinalizado=" + fechaFinalizado + ", descripcionRespuesta='"
                + descripcionRespuesta + '\'' + ", tipo=" + tipo + '}';
    }
}

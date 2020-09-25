package pe.gob.mindef.app.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_T_DOCUMENTOS")
public class Documento implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_DOCUMENTOS")
    @SequenceGenerator(name = "SQ_DOCUMENTOS", sequenceName = "SQ_TT_DOCUMENTOS_ID", allocationSize = 1)
    @Column(name = "IDDOCUMENTO")
    private Long idDocumento;

    @Column(name = "HT")
    private String ht;

    @Column(name = "FECHADOCUMENTO")
    private Date fechaDocumento;

    @ManyToOne(targetEntity = Proceso.class)
    @JoinColumn(name = "IDPROCESO", referencedColumnName = "IDPROCESO", foreignKey = @ForeignKey(name = "FK_DOCUMENTOS_PROCESO"))
    private Proceso proceso;

    @Column(name = "ESTADO")
    private int estadoDocumento;

    @Column(name = "OBSERVACION")
    private String observacion;

    @ManyToOne(targetEntity = Solicitud.class)
    @JoinColumn(name = "IDSOLICITUD", referencedColumnName = "IDSOLICITUD", foreignKey = @ForeignKey(name = "FK_DOCUMENTOS_PROCESO"))
    private Solicitud solicitud;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "documento", fetch = FetchType.EAGER)
    private Set<DetalleDocumento> detalleDocumentos = new HashSet<>();

    public Documento() {
    }


    public Documento(String ht, Date fechaDocumento, Proceso proceso, int estadoDocumento, String observacion, Solicitud solicitud, Set<DetalleDocumento> detalleDocumentos) {
        this.ht = ht;
        this.fechaDocumento = fechaDocumento;
        this.proceso = proceso;
        this.estadoDocumento = estadoDocumento;
        this.observacion = observacion;
        this.solicitud = solicitud;
        this.detalleDocumentos = detalleDocumentos;
    }

    public Long getIdDocumento() {
        return idDocumento;
    }

    public void setIdDocumento(Long idDocumento) {
        this.idDocumento = idDocumento;
    }

    public String getHt() {
        return ht;
    }

    public void setHt(String ht) {
        this.ht = ht;
    }

    public Date getFechaDocumento() {
        return fechaDocumento;
    }

    public void setFechaDocumento(Date fechaDocumento) {
        this.fechaDocumento = fechaDocumento;
    }

    public Proceso getProceso() {
        return proceso;
    }

    public void setProceso(Proceso proceso) {
        this.proceso = proceso;
    }

    public int getEstadoDocumento() {
        return estadoDocumento;
    }

    public void setEstadoDocumento(int estadoDocumento) {
        this.estadoDocumento = estadoDocumento;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public Solicitud getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(Solicitud solicitud) {
        this.solicitud = solicitud;
    }

    public Set<DetalleDocumento> getDetalleDocumentos() {
        return detalleDocumentos;
    }

    public void setDetalleDocumentos(Set<DetalleDocumento> detalleDocumentos) {
        this.detalleDocumentos = detalleDocumentos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Documento)) return false;
        Documento documento = (Documento) o;
        return Objects.equals(getIdDocumento(), documento.getIdDocumento()) &&
            Objects.equals(getHt(), documento.getHt()) &&
            Objects.equals(getFechaDocumento(), documento.getFechaDocumento()) &&
            Objects.equals(getProceso(), documento.getProceso()) &&
            Objects.equals(getEstadoDocumento(), documento.getEstadoDocumento()) &&
            Objects.equals(getObservacion(), documento.getObservacion()) &&
            Objects.equals(getSolicitud(), documento.getSolicitud()) &&
            Objects.equals(getDetalleDocumentos(), documento.getDetalleDocumentos());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdDocumento(), getHt(), getFechaDocumento(), getProceso(), getEstadoDocumento(), getObservacion(), getSolicitud());
    }

  /*  @Override
    public String toString() {
        return "Documento{" +
            "idDocumento=" + idDocumento +
            ", ht='" + ht + '\'' +
            ", fechaDocumento=" + fechaDocumento +
            ", proceso=" + proceso +
            ", estadoDocumento='" + estadoDocumento + '\'' +
            ", observacion='" + observacion + '\'' +
            ", solicitud=" + solicitud +
            ", detalle=" + detalleDocumentos +
            '}';
    }*/
}

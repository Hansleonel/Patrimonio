package pe.gob.mindef.app.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_T_DETALLEDOCUMENTO")
public class DetalleDocumento implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_DETALLEDOCUMENTO")
    @SequenceGenerator(name = "SQ_DETALLEDOCUMENTO", sequenceName = "SQ_TT_DETALLEDOCUMENTO_ID", allocationSize = 1)
    @Column(name = "IDDETALLEDOCUMENTO")
    private Long idDetalleDocumento;

    @ManyToOne(targetEntity = Bien.class)
    @JoinColumn(name = "CODIGOPATRIMONIAL", referencedColumnName = "CODIGOPATRIMONIAL", foreignKey = @ForeignKey(name = "FK_DETALLEDOCUMENTO_BIEN"))
    private Bien bien;

    @JsonBackReference
    @ManyToOne(targetEntity = Documento.class)
    @JoinColumn(name = "IDDOCUMENTO", referencedColumnName = "IDDOCUMENTO", foreignKey = @ForeignKey(name = "FK_DETALLEDOCUMENTO_BIEN"))
    private Documento documento;

    @Column(name = "OBSERVACION")
    private String observacion;

    @Column(name = "ESTADOBIEN")
    private String estadoBien;

    public DetalleDocumento() {
    }

    public DetalleDocumento(Bien bien, Documento documento, String observacion, String estadoBien) {
        this.bien = bien;
        this.documento = documento;
        this.observacion = observacion;
        this.estadoBien = estadoBien;
    }

    public Long getIdDetalleDocumento() {
        return idDetalleDocumento;
    }

    public void setIdDetalleDocumento(Long idDetalleDocumento) {
        this.idDetalleDocumento = idDetalleDocumento;
    }

    public Bien getBien() {
        return bien;
    }

    public void setBien(Bien bien) {
        this.bien = bien;
    }

    public Documento getDocumento() {
        return documento;
    }

    public void setDocumento(Documento documento) {
        this.documento = documento;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public String getEstadoBien() {
        return estadoBien;
    }

    public void setEstadoBien(String estadoBien) {
        this.estadoBien = estadoBien;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DetalleDocumento)) return false;
        DetalleDocumento that = (DetalleDocumento) o;
        return Objects.equals(getIdDetalleDocumento(), that.getIdDetalleDocumento()) &&
            Objects.equals(getBien(), that.getBien()) &&
            Objects.equals(getDocumento(), that.getDocumento()) &&
            Objects.equals(getObservacion(), that.getObservacion()) &&
            Objects.equals(getEstadoBien(), that.getEstadoBien());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdDetalleDocumento(), getBien(), getDocumento(), getObservacion(), getEstadoBien());
    }

/*    @Override
    public String toString() {
        return "DetalleDocumento{" +
            "idDetalleDocumento=" + idDetalleDocumento +
            ", bien=" + bien +
            ", documento=" + documento.getIdDocumento() +
            ", observacion='" + observacion + '\'' +
            ", estadoBien='" + estadoBien + '\'' +
            '}';
    }*/
}

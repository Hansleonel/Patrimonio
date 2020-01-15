package pe.gob.mindef.app.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_T_BIENSIGA")
// @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Bien implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    /*@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_INVITADO")
    @SequenceGenerator(name = "SQ_INVITADO", sequenceName = "SQ_TM_INVITADO_ID")*/
    @Column(name = "CODIGOPATRIMONIAL")
    private Long id_patrimonio;

    @Column(name = "CODIGOINTERNO")
    private Long id_interno;

    @Column(name = "SECUENCIA")
    private int secuencia;

    @Column(name = "TIPOBIEN")
    private String tipo_bien;

    @Column(name = "GRUPOBIEN")
    private int grupo_bien;

    @Column(name = "CLASEBIEN")
    private int clase_bien;

    @Column(name = "FAMILIABIEN")
    private int familia_bien;

    @Column(name = "ITEMBIEN")
    private int item_bien;

    @Column(name = "DESCRIPCION")
    private String descripcion;

    @Column(name = "SEDE")
    private int sede;

    @Column(name = "PLIEGO")
    private int pliego;

    @Column(name = "CENTROCOSTO")
    private long centro_costo;

    @Column(name = "EMPLEADO")
    private long empleado;

    @Column(name = "ORIGENACTIVO")
    private String origen_activo;

    @Column(name = "TIPOUBICACION")
    private int tipo_ubicacion;

    @Column(name = "CODIGOUBICACION")
    private int codigo_ubicacion;

    @Column(name = "MARCA")
    private int codigo_marca;

    @Column(name = "CODIGOCOLOR")
    private int codigo_color;

    @Column(name = "NOMBRECOLOR")
    private String nombre_color;

    @Column(name = "CARACTERISTICA")
    private String caracteristica;

    @Column(name = "MODELO")
    private String modelo;

    @Column(name = "MEDIDAS")
    private String medidas;

    @Column(name = "NROSERIE")
    private String nroserie;

    @Column(name = "VALORINICIAL")
    private String valor_inicial;

    @Column(name = "VALORDEP")
    private String valor_deprec;

    @Column(name = "CLASIFICADOR")
    private String clasificador;

    @Column(name = "ANOEJECUCION")
    private int ano_e;

    @Column(name = "SUBCTA")
    private long sub_cta;

    @Column(name = "MAYOR")
    private int mayor;

    @Column(name = "ASIGNADO")
    private String estado_asignado;

    @Column(name = "REPARACION")
    private String estado_reparacion;

    @Column(name = "SALIDA")
    private String salida;

    @Column(name = "ESTADO")
    private String estado_activo;

    @Column(name = "CONSERVACION")
    private String estado_consercacion;

    public Bien() {
    }

    public Bien(Long id_patrimonio, Long id_interno, int secuencia, String tipo_bien, int grupo_bien, int clase_bien, int familia_bien, int item_bien, String descripcion, int sede, int pliego, long centro_costo, long empleado, String origen_activo, int tipo_ubicacion, int codigo_ubicacion, int codigo_marca, int codigo_color, String nombre_color, String caracteristica, String modelo, String medidas, String nroserie, String valor_inicial, String valor_deprec, String clasificador, int ano_e, long sub_cta, int mayor, String estado_asignado, String estado_reparacion, String salida, String estado_activo, String estado_consercacion) {
        this.id_patrimonio = id_patrimonio;
        this.id_interno = id_interno;
        this.secuencia = secuencia;
        this.tipo_bien = tipo_bien;
        this.grupo_bien = grupo_bien;
        this.clase_bien = clase_bien;
        this.familia_bien = familia_bien;
        this.item_bien = item_bien;
        this.descripcion = descripcion;
        this.sede = sede;
        this.pliego = pliego;
        this.centro_costo = centro_costo;
        this.empleado = empleado;
        this.origen_activo = origen_activo;
        this.tipo_ubicacion = tipo_ubicacion;
        this.codigo_ubicacion = codigo_ubicacion;
        this.codigo_marca = codigo_marca;
        this.codigo_color = codigo_color;
        this.nombre_color = nombre_color;
        this.caracteristica = caracteristica;
        this.modelo = modelo;
        this.medidas = medidas;
        this.nroserie = nroserie;
        this.valor_inicial = valor_inicial;
        this.valor_deprec = valor_deprec;
        this.clasificador = clasificador;
        this.ano_e = ano_e;
        this.sub_cta = sub_cta;
        this.mayor = mayor;
        this.estado_asignado = estado_asignado;
        this.estado_reparacion = estado_reparacion;
        this.salida = salida;
        this.estado_activo = estado_activo;
        this.estado_consercacion = estado_consercacion;
    }

    public Long getId_patrimonio() {
        return id_patrimonio;
    }

    public void setId_patrimonio(Long id_patrimonio) {
        this.id_patrimonio = id_patrimonio;
    }

    public Long getId_interno() {
        return id_interno;
    }

    public void setId_interno(Long id_interno) {
        this.id_interno = id_interno;
    }

    public int getSecuencia() {
        return secuencia;
    }

    public void setSecuencia(int secuencia) {
        this.secuencia = secuencia;
    }

    public String getTipo_bien() {
        return tipo_bien;
    }

    public void setTipo_bien(String tipo_bien) {
        this.tipo_bien = tipo_bien;
    }

    public int getGrupo_bien() {
        return grupo_bien;
    }

    public void setGrupo_bien(int grupo_bien) {
        this.grupo_bien = grupo_bien;
    }

    public int getClase_bien() {
        return clase_bien;
    }

    public void setClase_bien(int clase_bien) {
        this.clase_bien = clase_bien;
    }

    public int getFamilia_bien() {
        return familia_bien;
    }

    public void setFamilia_bien(int familia_bien) {
        this.familia_bien = familia_bien;
    }

    public int getItem_bien() {
        return item_bien;
    }

    public void setItem_bien(int item_bien) {
        this.item_bien = item_bien;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getSede() {
        return sede;
    }

    public void setSede(int sede) {
        this.sede = sede;
    }

    public int getPliego() {
        return pliego;
    }

    public void setPliego(int pliego) {
        this.pliego = pliego;
    }

    public long getCentro_costo() {
        return centro_costo;
    }

    public void setCentro_costo(long centro_costo) {
        this.centro_costo = centro_costo;
    }

    public long getEmpleado() {
        return empleado;
    }

    public void setEmpleado(long empleado) {
        this.empleado = empleado;
    }

    public String getOrigen_activo() {
        return origen_activo;
    }

    public void setOrigen_activo(String origen_activo) {
        this.origen_activo = origen_activo;
    }

    public int getTipo_ubicacion() {
        return tipo_ubicacion;
    }

    public void setTipo_ubicacion(int tipo_ubicacion) {
        this.tipo_ubicacion = tipo_ubicacion;
    }

    public int getCodigo_ubicacion() {
        return codigo_ubicacion;
    }

    public void setCodigo_ubicacion(int codigo_ubicacion) {
        this.codigo_ubicacion = codigo_ubicacion;
    }

    public int getCodigo_marca() {
        return codigo_marca;
    }

    public void setCodigo_marca(int codigo_marca) {
        this.codigo_marca = codigo_marca;
    }

    public int getCodigo_color() {
        return codigo_color;
    }

    public void setCodigo_color(int codigo_color) {
        this.codigo_color = codigo_color;
    }

    public String getNombre_color() {
        return nombre_color;
    }

    public void setNombre_color(String nombre_color) {
        this.nombre_color = nombre_color;
    }

    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMedidas() {
        return medidas;
    }

    public void setMedidas(String medidas) {
        this.medidas = medidas;
    }

    public String getNroserie() {
        return nroserie;
    }

    public void setNroserie(String nroserie) {
        this.nroserie = nroserie;
    }

    public String getValor_inicial() {
        return valor_inicial;
    }

    public void setValor_inicial(String valor_inicial) {
        this.valor_inicial = valor_inicial;
    }

    public String getValor_deprec() {
        return valor_deprec;
    }

    public void setValor_deprec(String valor_deprec) {
        this.valor_deprec = valor_deprec;
    }

    public String getClasificador() {
        return clasificador;
    }

    public void setClasificador(String clasificador) {
        this.clasificador = clasificador;
    }

    public int getAno_e() {
        return ano_e;
    }

    public void setAno_e(int ano_e) {
        this.ano_e = ano_e;
    }

    public long getSub_cta() {
        return sub_cta;
    }

    public void setSub_cta(long sub_cta) {
        this.sub_cta = sub_cta;
    }

    public int getMayor() {
        return mayor;
    }

    public void setMayor(int mayor) {
        this.mayor = mayor;
    }

    public String getEstado_asignado() {
        return estado_asignado;
    }

    public void setEstado_asignado(String estado_asignado) {
        this.estado_asignado = estado_asignado;
    }

    public String getEstado_reparacion() {
        return estado_reparacion;
    }

    public void setEstado_reparacion(String estado_reparacion) {
        this.estado_reparacion = estado_reparacion;
    }

    public String getSalida() {
        return salida;
    }

    public void setSalida(String salida) {
        this.salida = salida;
    }

    public String getEstado_activo() {
        return estado_activo;
    }

    public void setEstado_activo(String estado_activo) {
        this.estado_activo = estado_activo;
    }

    public String getEstado_consercacion() {
        return estado_consercacion;
    }

    public void setEstado_consercacion(String estado_consercacion) {
        this.estado_consercacion = estado_consercacion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Bien)) return false;
        Bien bien = (Bien) o;
        return getSecuencia() == bien.getSecuencia() &&
            getGrupo_bien() == bien.getGrupo_bien() &&
            getClase_bien() == bien.getClase_bien() &&
            getFamilia_bien() == bien.getFamilia_bien() &&
            getItem_bien() == bien.getItem_bien() &&
            getSede() == bien.getSede() &&
            getPliego() == bien.getPliego() &&
            getCentro_costo() == bien.getCentro_costo() &&
            getEmpleado() == bien.getEmpleado() &&
            getTipo_ubicacion() == bien.getTipo_ubicacion() &&
            getCodigo_ubicacion() == bien.getCodigo_ubicacion() &&
            getCodigo_marca() == bien.getCodigo_marca() &&
            getCodigo_color() == bien.getCodigo_color() &&
            getAno_e() == bien.getAno_e() &&
            getSub_cta() == bien.getSub_cta() &&
            getMayor() == bien.getMayor() &&
            Objects.equals(getId_patrimonio(), bien.getId_patrimonio()) &&
            Objects.equals(getId_interno(), bien.getId_interno()) &&
            Objects.equals(getTipo_bien(), bien.getTipo_bien()) &&
            Objects.equals(getDescripcion(), bien.getDescripcion()) &&
            Objects.equals(getOrigen_activo(), bien.getOrigen_activo()) &&
            Objects.equals(getNombre_color(), bien.getNombre_color()) &&
            Objects.equals(getCaracteristica(), bien.getCaracteristica()) &&
            Objects.equals(getModelo(), bien.getModelo()) &&
            Objects.equals(getMedidas(), bien.getMedidas()) &&
            Objects.equals(getNroserie(), bien.getNroserie()) &&
            Objects.equals(getValor_inicial(), bien.getValor_inicial()) &&
            Objects.equals(getValor_deprec(), bien.getValor_deprec()) &&
            Objects.equals(getClasificador(), bien.getClasificador()) &&
            Objects.equals(getEstado_asignado(), bien.getEstado_asignado()) &&
            Objects.equals(getEstado_reparacion(), bien.getEstado_reparacion()) &&
            Objects.equals(getSalida(), bien.getSalida()) &&
            Objects.equals(getEstado_activo(), bien.getEstado_activo()) &&
            Objects.equals(getEstado_consercacion(), bien.getEstado_consercacion());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_patrimonio(), getId_interno(), getSecuencia(), getTipo_bien(), getGrupo_bien(), getClase_bien(), getFamilia_bien(), getItem_bien(), getDescripcion(), getSede(), getPliego(), getCentro_costo(), getEmpleado(), getOrigen_activo(), getTipo_ubicacion(), getCodigo_ubicacion(), getCodigo_marca(), getCodigo_color(), getNombre_color(), getCaracteristica(), getModelo(), getMedidas(), getNroserie(), getValor_inicial(), getValor_deprec(), getClasificador(), getAno_e(), getSub_cta(), getMayor(), getEstado_asignado(), getEstado_reparacion(), getSalida(), getEstado_activo(), getEstado_consercacion());
    }

    @Override
    public String toString() {
        return "Bien{" +
            "id_patrimonio=" + id_patrimonio +
            ", id_interno=" + id_interno +
            ", secuencia=" + secuencia +
            ", tipo_bien='" + tipo_bien + '\'' +
            ", grupo_bien=" + grupo_bien +
            ", clase_bien=" + clase_bien +
            ", familia_bien=" + familia_bien +
            ", item_bien=" + item_bien +
            ", descripcion='" + descripcion + '\'' +
            ", sede=" + sede +
            ", pliego=" + pliego +
            ", centro_costo=" + centro_costo +
            ", empleado=" + empleado +
            ", origen_activo='" + origen_activo + '\'' +
            ", tipo_ubicacion=" + tipo_ubicacion +
            ", codigo_ubicacion=" + codigo_ubicacion +
            ", codigo_marca=" + codigo_marca +
            ", codigo_color=" + codigo_color +
            ", nombre_color='" + nombre_color + '\'' +
            ", caracteristica='" + caracteristica + '\'' +
            ", modelo='" + modelo + '\'' +
            ", medidas='" + medidas + '\'' +
            ", nroserie='" + nroserie + '\'' +
            ", valor_inicial='" + valor_inicial + '\'' +
            ", valor_deprec='" + valor_deprec + '\'' +
            ", clasificador='" + clasificador + '\'' +
            ", ano_e=" + ano_e +
            ", sub_cta=" + sub_cta +
            ", mayor=" + mayor +
            ", estado_asignado='" + estado_asignado + '\'' +
            ", estado_reparacion='" + estado_reparacion + '\'' +
            ", salida='" + salida + '\'' +
            ", estado_activo='" + estado_activo + '\'' +
            ", estado_consercacion='" + estado_consercacion + '\'' +
            '}';
    }
}

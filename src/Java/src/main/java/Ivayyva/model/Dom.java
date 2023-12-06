package Ivayyva.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ivayyva.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Дом
 */
@Entity(name = "IISIvayyvaДом")
@Table(schema = "public", name = "Дом")
public class Dom {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Тип")
    private Integer тип;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klass")
    @Convert("Klass")
    @Column(name = "Класс", length = 16, unique = true, nullable = false)
    private UUID _klassid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klass", insertable = false, updatable = false)
    private Klass klass;


    public Dom() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТип() {
      return тип;
    }

    public void setТип(Integer тип) {
      this.тип = тип;
    }


}
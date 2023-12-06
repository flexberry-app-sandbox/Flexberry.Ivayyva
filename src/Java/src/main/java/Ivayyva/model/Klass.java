package Ivayyva.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ivayyva.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Класс
 */
@Entity(name = "IISIvayyvaКласс")
@Table(schema = "public", name = "Класс")
public class Klass {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Действие")
    private String действие;


    public Klass() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДействие() {
      return действие;
    }

    public void setДействие(String действие) {
      this.действие = действие;
    }


}
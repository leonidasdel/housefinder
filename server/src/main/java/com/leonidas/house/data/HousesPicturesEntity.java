package com.leonidas.house.data;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.Where;
import javax.persistence.*;

@Entity
@Table(name = "houses_pictures")
public class HousesPicturesEntity {
    @Id
    @GeneratedValue
    private long id;

    @Column
    private  String pathLocation;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HOUSE_ID", insertable = false, updatable = false)
    @Fetch(FetchMode.JOIN)
    private HouseEntity houseEntity;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPathLocation() {
        return pathLocation;
    }

    public void setPathLocation(String pathLocation) {
        this.pathLocation = pathLocation;
    }


    public HouseEntity getHouseEntity() {
        return houseEntity;
    }

    public void setHouseEntity(HouseEntity houseEntity) {
        this.houseEntity = houseEntity;
    }
}

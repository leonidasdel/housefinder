package com.leonidas.house.model;

public class HousePictureRequestModel {

        public HousePictureRequestModel(String pathLocation){
            this.pathLocation = pathLocation;
        }

        private  String pathLocation;

        public String getPathLocation() {
            return pathLocation;
        }

        public void setPathLocation(String pathLocation) {
            this.pathLocation = pathLocation;
        }
    }



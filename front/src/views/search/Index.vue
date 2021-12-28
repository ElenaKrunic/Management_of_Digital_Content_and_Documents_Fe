<template>
    <v-row>
        <v-col align="center" justify="center">
            <v-card dark style="width 40%; margin-top: 2.5%">
                <v-card-title justify="center">
                    <v-col>
                        <h3> Indeksiranje </h3>
                    </v-col>
                </v-card-title>
                <form>
                    <v-text-field
                    v-model="form.name"
                    label="Ime proizvoda"
                    name="name"
                    style="width: 60%"
                    ></v-text-field>

                    <v-text-field
                    v-model="form.description"
                    label="Opis"
                    name="description"
                    style="width: 60%"
                    ></v-text-field>

                     <v-text-field
                    v-model="form.firstname"
                    label="Ime prodavca"
                    name="description"
                    style="width: 60%"
                    ></v-text-field>

                    <v-file-input
                        v-model="form.file"
                        accept=".pdf"
                        name="file"
                        label="Izaberi dokument"
                        style="width: 65.5%; margin-left: -5%"
                        >
                    </v-file-input>
                    <br/>

                    <v-btn class="mr-4" @click="submit"> Potvrdi </v-btn>
                    <br/>
                    <br/>
                </form>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import axios from '../../../axiosConfig.js';   
export default {
    data() {
        return {
            form: {
                name: "",
                description : "", 
                firstname: "",
                file: ""
            }
        };
    },

    methods: {
        submit() {
            let fd = new FormData();
            fd.append("name", this.form.name);
            fd.append("description", this.form.description);
            fd.append("firstname", this.form.firstname);
            fd.append("file", this.form.file);
            axios
                .post("api/index/add",fd)
                .then((response) => {
                    alert(response.data);
                    this.router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
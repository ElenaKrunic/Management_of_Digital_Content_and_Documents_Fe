<template>
<v-container>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-simple-table dark style="color:beige">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"> Name </th>
                  <th class="text-left"> Description </th>
                  <th class="text-left"> Price </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="article in search" :key="article.id">
                  <td>{{ article.name }}</td>
                  <td>{{ article.description }}</td>
                  <td>{{ article.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  data() {
    return {
      articles: []
    }
  },
  computed: {
    ...mapGetters(["search"])
  }
};
</script>
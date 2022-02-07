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
                  <th class="text-left"> Ordered at:  </th>
                  <th class="text-left"> Is there an anonymous comment present? </th>
                  <th class="text-left"> Grade: </th>
                  <th class="text-left"> Comment </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="errand in search" :key="errand.id">
                  <td>{{ errand.orderedAtDate }}</td>
                  <td>{{ errand.anonymousComment }}</td>
                  <td>{{ errand.grade }}</td>
                  <td> {{ errand.comment }}</td>

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
      errands: []
    }
  },
  computed: {
    ...mapGetters(["search"])
  }
};
</script>
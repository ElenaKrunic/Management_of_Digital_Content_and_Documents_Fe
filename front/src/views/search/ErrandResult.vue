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
                  <th class="text-left"> Ordered at time:  </th>
                  <th class="text-left"> Anonymous comment: </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="errand in search" :key="errand.id">
                  <td>{{ errand.orderedAtDate }}</td>
                  <td>{{ errand.anonymousComment }}</td>
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
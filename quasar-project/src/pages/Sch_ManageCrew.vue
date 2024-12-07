<template>
<div class="crew-management">
  <h3>Manage Crew</h3>
  <table>
      <thead>
      <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Work Hours</th>
          <th>Rest Hours</th>
          <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="crew in crewList" :key="crew.id" @click="selectCrew(crew)">
          <td>{{ crew.employeeId }}</td>
          <td>{{ crew.name }}</td>
          <td>{{ crew.workHours }}</td>
          <td>{{ crew.restHours }}</td>
          <td>
          <button @click.stop="editCrew(crew)">Edit</button>
          <button @click.stop="deleteCrew(crew.id)">Delete</button>
          </td>
      </tr>
      </tbody>
  </table>
  </div>

<!-- Edit Crew Modal (optional) -->
<div v-if="isEditing" class="modal">
  <div class="modal-content">
    <h4>Edit Crew Details</h4>
    <form @submit.prevent="updateCrew">
      <div>
        <label for="crewName">Name:</label>
        <input type="text" v-model="currentCrew.name" id="crewName" />
      </div>
      <div>
        <label for="workHours">Work Hours:</label>
        <input type="number" v-model="currentCrew.workHours" id="workHours" />
      </div>
      <div>
        <label for="restHours">Rest Hours:</label>
        <input type="number" v-model="currentCrew.restHours" id="restHours" />
      </div>
      <button type="submit">Save Changes</button>
      <button @click="isEditing = false">Cancel</button>
    </form>
  </div>
</div>
</template>
<script>
  export default {
    name: "Manager",
    data() {
      return {
        employeeId: "12345", // This should be dynamically fetched after login
        employeeName: "Sumit", // This should be dynamically fetched after login
        crewList: [
          { id: 1, employeeId: "1001", name: "roni", workHours: 160, restHours: 40 },
          { id: 2, employeeId: "1002", name: "oashe", workHours: 150, restHours: 50 },
          { id: 3, employeeId: "1003", name: "yuvraj", workHours: 170, restHours: 30 },
        ],
        isEditing: false,
        currentCrew: {},
      };
    },
    methods: {
      // Select a crew member to edit
      selectCrew(crew) {
        this.currentCrew = { ...crew };
        this.isEditing = true;
      },

      // Edit the crew details
      editCrew(crew) {
        this.selectCrew(crew);
      },

      // Update the crew details after edit
      updateCrew() {
        const index = this.crewList.findIndex((crew) => crew.id === this.currentCrew.id);
        if (index !== -1) {
          this.$set(this.crewList, index, { ...this.currentCrew });
          this.isEditing = false;
        }
      },

      // Delete a crew member
      deleteCrew(crewId) {
        const index = this.crewList.findIndex((crew) => crew.id === crewId);
        if (index !== -1) {
          this.crewList.splice(index, 1);
        }
      },
    },
  };
  </script>


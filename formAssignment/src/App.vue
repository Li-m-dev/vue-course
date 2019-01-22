<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="name">Full name</label>
                        <input
                            type="text"
                            id="name"
                            class="form-control"
                            v-model="userInfo.name"
                            >
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userInfo.email"
                            >
                            <!-- <p>{{ userInfo.email }}</p> -->
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        class="form-control"
                        v-model.lazy="userInfo.password">
                        <!-- <p>{{userInfo.password}}</p> -->
                    </div>
                    <div class="form-group">
                        <label for="storeData">Store Data?</label>
                        <label for="yes">
                            <input
                                type="radio"
                                id="yes"
                                value="Yes"
                                v-model="storeData"> Yes
                        </label>
                        <label for="no">
                            <input
                                type="radio"
                                id="no"
                                value="No"
                                v-model="storeData"> No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                        class="btn btn-primary"
                        @click.prevent="submitted"
                        >Submit
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row"
        v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userInfo.name }}</p>
                        <p>Mail: {{ userInfo.email}}</p>
                        <p>Password: {{ userInfo.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo:{
                    name : "",
                    email : "",
                    password : ""
                },
                isSubmitted: false,
                storeData: "yes"
            }
        },
        methods: {
            submitted(){
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>

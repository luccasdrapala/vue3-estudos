<template>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>

<body class="bg-gray-700">
    <!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <TodoSpinner v-if="loading" />

            <div v-else>
                <TodoFormAdd/>

                <TodoItems v-if="$store.state.todos.length" />

                <TodoEmpty v-else/>
            </div>
        </div>
    </div>
    <!--/ Content -->

</body>
</html>
  
</template>

<script>
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoEmpty from './components/TodoEmpty.vue';

export default {
    name: "App",
    components: 
    { TodoSpinner, TodoFormAdd, TodoItems, TodoEmpty },

    data() {
        return {
            loading: false
        }
    },

    created(){
        this.loading = true
        this.$store.dispatch('getTodos').finally(() => {
            this.loading = false
        })
    },
}
</script>



<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click= "selectedComponent = 'Quote'">Quote</button>
                <button @click= "selectedComponent = 'Author'">Author</button>
                <button @click= "selectedComponent = 'New'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <!-- <Quote>
                <h2 slot="title">{{ quoteTitle }}</h2>
                <p slot="content">This is wonderful</p>
                </Quote> -->
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data() {
            return {
                quoteTitle: 'The Quote1',
                selectedComponent: 'Quote'
            }
        },
        components: {
            Quote,
            Author,
            New
        }
    }
</script>

<style scoped>
</style>

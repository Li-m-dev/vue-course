<template>
    <div class="container">
    <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></Header>   
    <new-quote @quoteAdded="newQuote"></new-quote>
    <hr>
    <quote-grid :quotes="quotes" @quoteDeleted="removeQuote"></quote-grid>
    <div class="row">
        <div class="col-sm-12 test-center">
            <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
        </div>
    </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
    export default {
        data() {
            return {
                quotes: [
                    'test quote to see'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Please delete quotes first')
                }
                this.quotes.push(quote)
            },
            removeQuote(i) {
                this.quotes.splice(i, 1)
            }
        },
        components: {
            QuoteGrid,
            NewQuote,
            Header
        }
    }
</script>

<style>
</style>

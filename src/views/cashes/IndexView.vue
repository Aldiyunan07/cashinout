<template>
    <div class="container">
        <div class="flex">
            <div class="w-full lg:w-8/12 mr-6">
                <div class="w-full mb-8">
                    <div class="bg-gray-200 transform -rotate-2 rounded-2xl">
                        <div class="bg-gradient-to-br from-blue-500 to-light-blue-400 text-white p-6 transform rotate-2 rounded-2xl">
                            <label class="block uppercase text-xs text-blue-100 font-semibold tracking-wider mb-1" for=""> Balance </label>
                            <div class="text-3xl font-semibold">
                                Rp.{{ state.balances }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center -mx-2" >
                    <div class="w-full px-2">
                        <div class="bg-gray-200 transform -rotate-3 rounded-2xl">
                            <div class="bg-gradient-to-br from-teal-500 to-cyan-400 text-white p-6 transform rotate-3 rounded-2xl">
                                <label class="block uppercase text-xs text-teal-100 font-semibold tracking-wider mb-1" for=""> Debit </label>
                                <div class="text-3xl font-semibold">
                                    Rp.{{ state.debit }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-2">
                        <div class="bg-gray-200 transform -rotate-3 rounded-2xl">
                            <div class="bg-gradient-to-br from-red-500 to-yellow-400 text-white p-6 transform rotate-3 rounded-2xl">
                                <label class="block uppercase text-xs text-red-100 font-semibold tracking-wider mb-1" for=""> Credit </label>
                                    <div class="text-3xl font-semibold">
                                        Rp.{{ state.credit }}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-10">
                    <div class="border rounded-lg oveflow-hidden">
                        <div class="border-b px-6 py-6 bg-gray-50 flex items-center justify-between">
                            <div>
                                Transactions
                            </div>
                            <form @submit.prevent="getCashes" class="flex items-center">
                                <input type="date" v-model="form.begin" class="bg-white rounded px-3 py-2 border">
                                <input type="date" v-model="form.to" class="bg-white rounded px-3 py-2 border mx-2">
                                <input type="submit" class="px-3 py-2 rounded bg-gradient-to-br from-blue-500 to-light-blue-500 text-white focus:outline-none" value="Go">
                            </form>
                        </div>
                        <div class="h-112 overflow-y-scroll">
                            <template v-for="transaction in state.transaction" :key="transaction.id">
                                <router-link :to="`/cashes/${transaction.slug}`" class="flex px-6 py-4 justify-between items-center border-b hover:bg-gray-50" href="">
                                    <span class="flex flex-col">
                                        <span class="text-gray-500 text-xs"> {{ transaction.when }}</span>
                                        <span>{{ transaction.name }}</span>
                                    </span>
                                    <span :class="transaction.isCredit ? 'text-red-500' : 'text-green-500'" >{{ transaction.amount }}</span>
                                </router-link>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-4/12">
                <h1 class="text-gray-800 mb-5 font-semibold text-lg">
                    Add Transaction History
                </h1>
                <form @submit.prevent="add">
                    <div class="mb-5">
                            <label for="name" class="text-xs uppercase font-medium block mb-2">
                                Name
                            </label>
                            <input type="text" v-model="form.name" name="name" id="name" class="border transition duration-150 focus:outline-none focus-ring focus:border-blue-400 h-10 px-4 w-full rounded-lg">
                            <!-- <div class="text-red-500 text-sm mt-2" v-if="errors['name']">
                                {{ errors['name'][0] }}
                        </div> -->
                    </div>
                    <div class="mb-5">
                        <label for="amount" class="text-xs uppercase font-medium block mb-2">
                            Amount
                        </label>
                        <input type="text" v-model="form.amount" name="amount" id="amount" class="border transition duration-150 focus:outline-none focus-ring focus:border-blue-400 h-10 px-4 w-full rounded-lg">
                        <!-- <div class="text-red-500 text-sm mt-2" v-if="errors['amount']">
                            {{ errors['amount'][0] }}
                        </div> -->
                    </div>
                    <div class="mb-5">
                        <label for="when" class="text-xs uppercase font-medium block mb-2">
                            when
                        </label>
                        <input type="date" v-model="form.when" name="when" id="when" class="border transition duration-150 focus:outline-none focus-ring focus:border-blue-400 h-10 px-4 w-full rounded-lg">
                        <!-- <div class="text-red-500 text-sm mt-2" v-if="errors['when']">
                            {{ errors['when'][0] }}
                        </div> -->
                    </div>
                    <div class="mb-5">
                        <label for="description" class="text-xs uppercase font-medium block mb-2">
                            description
                        </label>
                        <textarea v-model="form.description" name="description" id="description" class="border transition duration-150 focus:outline-none focus-ring focus:border-blue-400 py-4 px-4 w-full rounded-lg"> </textarea>
                        <!-- <div class="text-red-500 text-sm mt-2" v-if="errors['description']">
                            {{ errors['description'][0] }}
                        </div> -->
                    </div>
                    <button class="px-4 h-10 rounded-lg focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 text-white"> Add Transaction </button>

                </form>
            </div>
        </div>

    </div>
</template>

<script>
    import {onMounted, ref, reactive} from 'vue'
    import axios from 'axios'
    export default{
        setup (){
            const state = ref([])
            const form = reactive({
                begin : '',
                to    : '',

                name : '',
                amount : '',
                description : '',
                when : ''
            })
            const getCashes = async() => {
                let { data } = await axios.get('api/cash',{
                    params:{
                        from : form.begin,
                        to   : form.to
                    }
                });
                
                state.value = data
                form.begin = data.firstOfMonth
                form.to    = data.now   
            }

            const add = async() => {
                let response = await axios.post('api/cash/create', form)
                state.value.transactions.unshift(response.data.cash)
            }

            onMounted(()=>{
                getCashes()
            })
            
            return { state, form, getCashes, add }
        }
    }
</script>

<style>

</style>
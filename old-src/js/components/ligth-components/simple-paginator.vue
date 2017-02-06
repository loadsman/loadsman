<template>
    <div class="simple-paginator">
        <div v-if="editedPagination && editedPagination.lastPage > 1"
             class="simple-paginator__container"
        >
            <div class="control has-addons" style="margin-bottom: 0">
                <button class="button"
                        @click="editedPagination.page--, triggerChange()"
                        :disabled="editedPagination.page === 1"
                >
                    <i class="fa fa-arrow-left"></i>
                </button>
                <button class=" button simple-paginator__page-display"
                        @click="toEditMode"
                >
                    <a v-if="mode === 'default'">
                        {{editedPagination.page}}
                    </a>
                    <input ref="input"
                           v-if="mode === 'edit'"
                           class=" inputs has-no-spinner simple-paginator__input"
                           v-model="editedPagination.page"
                           @keyup.enter="mode = 'default', triggerChange()"
                           @focusout="mode = 'default', triggerChange()"
                           type="number"
                           :max="editedPagination.lastPage"
                           min="1"
                    >
                    <span style="opacity: .7">/{{editedPagination.lastPage}}</span>
                </button>
                <button class="button"
                        @click="editedPagination.page++, triggerChange()"
                        :disabled="editedPagination.page === editedPagination.lastPage"
                >
                    <i class="fa fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
    import _ from 'lodash'

    export default {
        data (){
            return {
                mode: 'default', // edit
                editedPagination: {
                    page: 1,
                    lastPage: 1,
                }
            }
        },
        created(){
            this.refreshFromParent()
        },
        watch: {
            value: {
                deep: true,
                handler: 'refreshFromParent',
            }
        },
        name: 'simple-paginator',
        props: [
            'value',
        ],
        methods: {
            toEditMode(){
                if (this.mode === 'edit'){
                    return
                }

                this.mode = 'edit'
                setTimeout(() => {
                    this.$refs.input.focus()
                    this.$refs.input.select()
                })
            },
            triggerChange(){
                if (this.editedPagination.page > this.editedPagination.lastPage){
                    this.editedPagination.page = this.editedPagination.lastPage
                }

                this.$emit('input', this.editedPagination)
            },
            refreshFromParent(){
                this.editedPagination = _.clone(this.value)
            },
        }
    }
</script>


<style lang="scss" rel="stylesheet/scss">
    @import '~bulma';

    .simple-paginator__container {
        display: inline-flex;
    }

    .simple-paginator input.simple-paginator__input{
        background-color: transparent;
        border-width: 0;
        outline: none;
        padding: 0;
        font-size: 14px;
    }

    .simple-paginator .simple-paginator__page-display{
        background-color: $light;
        text-align: center;
        padding: 4px 10px;
        vertical-align: middle;
    }
</style>

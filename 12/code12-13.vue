<template>
    <table>
        <my-row>
            <my-cell>123</my-cell>
            <my-cell>456</my-cell>
        </my-row>
    </table>
</template>

<script>
export default {
    name: 'custom-table',
    components: {
        'my-row': {
            name: 'my-row',
            render: function(h) {
                return h("tr", this.$slots.default);
            }
        },
        'my-cell': {
            name: 'my-cell',
            render: function(h) {
                return h("td", this.$slots.default);
            }
        }
    }
};
</script>
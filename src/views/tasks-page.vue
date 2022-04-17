<template>
    <div class="actions">
        <DxButton
            type="danger"
            :disabled="!selectedRows.length"
            text="Удалить запись"
        />
        <DxButton
            type="success"
            :disabled="!selectedRows.length"
            text="Смена ответственных"
        />
    </div>

    <DxDataGrid
        id="gridContainer"
        :data-source="dataSource"
        :allow-column-reordering="false"
        :column-auto-width="true"
        :show-borders="true"
        showRowLines="true"
        showColumnLines="true"
        :column-hiding-enabled="true"
        key-expr="ID"
        @editing-start="logEvent('EditingStart')"
        @init-new-row="logEvent('InitNewRow')"
        @row-inserting="logEvent('RowInserting')"
        @row-inserted="logEvent('RowInserted')"
        @row-updating="logEvent('RowUpdating')"
        @row-updated="logEvent('RowUpdated')"
        @row-removing="logEvent('RowRemoving')"
        @row-removed="logEvent('RowRemoved')"
        @saving="logEvent('Saving')"
        @saved="logEvent('Saved')"
        @edit-canceling="logEvent('EditCanceling')"
        @edit-canceled="logEvent('EditCanceled')"
        @selection-changed="onSelectionChanged"
        @exporting="onExporting"
    >
        >
        <!-- ----------------------------------- -->
        <DxPaging :page-size="10" />
        <!-- ----------------------------------- -->

        <DxPager
            :allowed-page-sizes="[5, 10, 'all']"
            :show-page-size-selector="true"
            :show-navigation-buttons="true"
            :show-info="true"
        />

        <!-- ----------------------------------- -->

        <DxExport :enabled="true" :allow-export-selected-data="true" />

        <!-- ----------------------------------- -->

        <DxFilterRow :visible="true" :show-operation-chooser="false" />

        <!-- ----------------------------------- -->

        <DxSelection
            :select-all-mode="allPages"
            show-check-boxes-mode="always"
            mode="multiple"
        />
        <!-- ----------------------------------- -->

        <DxEditing
            :allow-updating="true"
            :allow-adding="true"
            :use-icons="true"
            mode="popup"
        />
        <!-- ----------------------------------- -->

        <DxColumn data-field="FirstName" caption="Имя" :hiding-priority="7" />

        <!-- ----------------------------------- -->

        <DxColumn
            data-field="LastName"
            caption="Фамилия"
            :hiding-priority="2"
        />

        <!-- ----------------------------------- -->

        <DxColumn
            :width="130"
            data-field="Position"
            caption="Должность"
            :hiding-priority="3"
        />

        <!-- ----------------------------------- -->

        <DxColumn
            :width="125"
            data-field="StateID"
            caption="Штат"
            :hiding-priority="4"
        >
            <DxLookup
                :data-source="states"
                display-expr="Name"
                value-expr="ID"
            />
        </DxColumn>

        <!-- ----------------------------------- -->

        <DxColumn
            :width="125"
            data-field="BirthDate"
            caption="Дата рождения"
            data-type="date"
            :hiding-priority="5"
        />

        <!-- ----------------------------------- -->

        <DxColumn type="buttons">
            <DxButton name="edit" />
        </DxColumn>

        <!-- ----------------------------------- -->
    </DxDataGrid>
</template>
<script>
import {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxPaging,
    DxPager,
    DxLookup,
    DxSelection,
    DxFilterRow,
    DxExport,
} from "devextreme-vue/data-grid";
import { DxButton } from "devextreme-vue/button";
import { employees, states } from "./data.js";
import { ref } from "vue";
export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxEditing,
        DxPaging,
        DxPager,
        DxLookup,
        DxSelection,
        DxFilterRow,
        DxButton,
        DxExport,
    },

    setup() {
        const dataSource = ref(employees);
        let selectedRows = ref([]);

        const logEvent = (eventName) => {
            console.log(eventName);
        };

        const onSelectionChanged = (e) => {
            console.log(e);
            selectedRows.value = e.selectedRowKeys;
            console.log(e.selectedRowKeys);
            console.log(selectedRows.value);
        };

        const onClick = () => console.log("click");

        return {
            dataSource,
            states,
            logEvent,
            onSelectionChanged,
            onClick,
            selectedRows,
        };
    },
};
</script>

<style lang="scss">
.dx-box-flex .dx-box .dx-widget .dx-visibility-change-handler .dx-collection {
    display: flex;
    flex-direction: row;
}
</style>
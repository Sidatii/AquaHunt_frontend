import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CompetitionService} from "../../services/competitionService/competition.service";
import {formType} from "../../types/formType";

/**
 * Table component used to represent data in a table view structure
 *
 * @prop data - an array of elements
 */
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    @Input() prop: any;

    itemId: number = 0;

    headers: Array<string> = [];
    data: any;

    isUpdateFormVisible: boolean = false;

    constructor() {
    }

    ngOnInit() {
      this.headers = this.prop[0] ? Object.values(this.prop[0]) : [];
      this.data = this.prop[1] ? this.prop[1] : [];
      // console.log(this.data)
    }

    public form: formType = {
        method: 'GET',
        formInputs: [
            {
                type: 'number',
                name: 'promotion_percentage',
                id: 'promotion_percentage',
                label: 'percentage',
                value: ''
            },
            {
                type: 'date',
                name: 'promotion_expiration',
                id: 'promotion_expiration',
                label: 'expiration date',
                value: ''
            },
            {
                type: 'submit',
                name: 'submit',
                id: 'submit',
                label: 'add promotion',
                value: ''
            }
        ],
        options: {
            headers: {}
        }
    }

    // openUpdatePopUp(item: any) {
    //     this.itemId = item.id;
    //     this.form.formInputs[0].value = item.rate;
    //     this.form.formInputs[1].value = item.expiry;
    //     this.isUpdateFormVisible = true;
    // }

    // closeUpdatePopUp() {
    //     this.isUpdateFormVisible = false;
    // }

    // subitm form
    submitForm(id: number, data: any) {
        // data.id = this.itemId;
        // // TODO: link this function to the service
        // this.service.UpdateCompetition(id, data).subscribe((data: any) => {
        //     console.log(data);
        //     this.closeUpdatePopUp();
        //     this.router.navigate(['']).then(r => alert('Promotion updated successfully'));
        // });


    }


}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Observation } from 'src/app/shared/data.interface';
import * as data from 'src/app/shared/data.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public dataSource: Observation = data
  public observationForm!: FormGroup;
  selectedData: Data = this.dataSource.Datas[0];
  selectedproperties: any

  constructor(private fb: FormBuilder) {
    this.observationForm = this.fb.group({
      projectName: [''],
      constructionCount: [''],
      isConstructionCompleted: [false],
      lengthOfRoad: ['']
    });
  }

  ngOnInit() {
    this.setFormValues();
  }

  setFormValues() {
    this.selectedproperties=this.selectedData.Properties
    // set the form values based on the properties
    this.observationForm.setValue({
      projectName: this.getPropertyValue('Project Name', this.selectedproperties),
      constructionCount: this.getPropertyValue('Construction Count', this.selectedproperties),
      isConstructionCompleted: this.getPropertyValue('Is Construction Completed', this.selectedproperties),
      lengthOfRoad: this.getPropertyValue('Length of the road', this.selectedproperties)
    });
  }

  //get the property value from the properties array
  getPropertyValue(label: string, properties: any[]) {
    const property = properties.find(prop => prop.Label === label);
    return property ? property.Value : '';
  }

  // function to submit the form data
  onSubmit() {
    const formValues = this.observationForm.value;
    console.log('formValues :>> ', formValues);
    // update the selected observation data with the new form values
    this.selectedData.Properties = [
      { Label: 'Project Name', Value: formValues.projectName },
      { Label: 'Construction Count', Value: formValues.constructionCount },
      { Label: 'Is Construction Completed', Value: formValues.isConstructionCompleted },
      { Label: 'Length of the road', Value: formValues.lengthOfRoad }
    ];
  }
  
}


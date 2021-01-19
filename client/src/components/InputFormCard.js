import React from "react" 
import { Card, CardBody,
  CardTitle } from 'reactstrap'; 
  
  function InputFormCard(props) {
    return (
    <Card className="mt-4">
      <CardTitle >
        Input Recipe
      </CardTitle>
      <CardBody>
      <form>
        <label>
          Flour:
          <input type="number" name="flour" />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </CardBody>
    </Card>
    )
  }

  export default InputFormCard;
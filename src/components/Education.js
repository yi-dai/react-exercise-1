import React from 'react';
import './Education.css';

const Education = () => {
  return <h3 className="education">EDUCATION</h3>;
};

const EducationDetail = () => {
  return (
    <table className="experience">
      <tbody>
        <tr>
          <td className="year">1990</td>
          <td className="experienceDetail">
            <p className="abstract">I was born in Katowice</p>
            <p className="detail">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente,exercitationem, totam, dolores iste dolore est aut modi.
            </p>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="year">2005</td>
          <td className="experienceDetail">
            <p className="abstract">
              Secondary school specializing in artistic
            </p>
            <p className="detail">
              Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum
              ducimus quibusdam quis voluptatibus.
            </p>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="year">2009</td>
          <td className="experienceDetail">
            <p className="abstract">First level graduation in Graphic Design</p>
            <p className="detail">
              Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus
              quaerat quibusdam perferendis? lusto, quibusdam asperiores unde
              repellat.
            </p>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="year">2012</td>
          <td className="experienceDetail">
            <p className="abstract">
              Secondary level graduation in Graphic Design
            </p>
            <p className="detail">
              Ducimus, aliquam tempore autem itaque et accusantium!
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export { EducationDetail, Education };

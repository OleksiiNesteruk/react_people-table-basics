import React from 'react';
import { Person } from '../types';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
  people: Person[];
};

const PersonLink: React.FC<Props> = ({ person, people }) => {
  const {
    slug: personSlug,
    name,
    sex,
    born,
    died,
    fatherName,
    motherName,
  } = person;
  const { slug } = useParams();
  const mother = people.find(p => p.name === motherName);
  const father = people.find(p => p.name === fatherName);

  return (
    <tr
      data-cy="person"
      className={classNames({ 'has-background-warning': slug === personSlug })}
    >
      <td>
        <Link
          to={`/people/${personSlug}`}
          className={classNames({ 'has-text-danger': sex === 'f' })}
        >
          {name}
        </Link>
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>
        {mother ? (
          <Link to={`/people/${mother.slug}`} className="has-text-danger">
            {motherName}
          </Link>
        ) : (
          motherName || '-'
        )}
      </td>
      <td>
        {father ? (
          <Link to={`/people/${father.slug}`}>{fatherName}</Link>
        ) : (
          fatherName || '-'
        )}
      </td>
    </tr>
  );
};

export default PersonLink;
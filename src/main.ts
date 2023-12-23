import { GetDivisionsResponseDto } from '@dmgincs/api-types';

function myFunction() {
  // This is an example request to DamageInc's API. Change this to whatever you might need.
  const divisions = typedFetch<GetDivisionsResponseDto>('common/divisions/all')

  // This will print all divisions with their data in the console, when the function myFunction is executed.
  Object.entries(divisions).forEach(([divisionName, division]) => {
    Logger.log(divisionName + ': ' + JSON.stringify(division))
  })
}

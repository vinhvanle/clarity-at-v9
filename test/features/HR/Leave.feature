# Feature: Perform the Leave flow
#     Leave - 36 test cases

#     Scenario: 6510: Submit a holiday request as an ESS user with comment
#         Precondition: An existing employee with Line Manager
#         Given I login to the application as HR Assistant user
#         Then I should see system dashboard title
#         When I navigate to "Employee self service" workspace in "Human resources" module
#         When I go to My absence tab
#         When I click New leave request
#         When I input valid date for Start date field
#         When I input valid date for End date field offset by 0 day
#         When I input Holiday for Leave code field
#         When I input valid data for Description field
#         When I input full day for Leave hours field
#         When I switch to Yes in Submit toggle field
#         When I click OK button
#         Then I can see a success message displayed in Navigation Bar
#         When I logout of the current account

# # Given I login to the application as HR Assistant user
# # Then I should see a system dashboard title
# # When I navigate to "Work items assigned to me" page in "Common" module
# #         Then I can see the Leave Request from ESS user
# #         Then I can see the comment in the Leave Request
# #         When I approve the Leave Request
# #         When I logout of the current account

# # #     Scenario: 6511: View remaining holiday balance as ESS user
# # #         Precondition: An existing employee
# # #         Given I login to the application as ESS user
# # #         Then I should see a system dashboard title
# # #         When I navigate to "Employee self service" workspace in "Human resources" module
# # #         When I go to My Absence tab
# # #         Then I can see the remaining holiday balance
# # #         When I logout of the current account

# # #     Scenario: 6513: Negative Test - Submit a holiday request with minus hours (verify this does not add hours to the employees balance)
# # #         Precondition: An existing employee with Line Manager
# # #         Given I login to the application as ESS user
# # #         Then I should see a system dashboard title
# # #         When I navigate to "Employee self service" workspace in "Human resources" module
# # #         When I go to My Absence tab
# # #         When I click New leave request
# # #         When I input the data for the new Leave Request for Holiday type with negative hours
# # #         When I submit the new Leave Request
# # #         Then I can see the error message display as Validation failed
# # #         When I logout of the current account

# # #     Scenario: 6514 Submit a holiday request as an employee for half a day (specify 3.75 hours) ensure deducts from balance following approval
# # #         Precondition: An existing employee
# # #         Given I login to the application as ESS user
# # #         Then I should see a system dashboard title
# # #         When I navigate to "Employee self service" workspace in "Human resources" module
# # #         When I go to My Absence tab
# # #         When I click New leave request
# # #         When I input the data for the new Leave Request for Holiday type with 3.75 hours
# # #         When I submit the new Leave Request
# # #         When I logout of the current account


# # #         Given I login to the application as HR Assistant user
# # #         Then I should see a system dashboard title
# # #         When I navigate to "Work items assigned to me" page in "Common" module
# # #         Then I can see the Leave Request from ESS user
# # #         Then I can see the comment in the Leave Request
# # #         When I approve the Leave Request
# # #         When I logout of the current account

# # #         Given I login to the application as ESS user
# # #         Then I should see a system dashboard title
# # #         When I navigate to "Employee self service" workspace in "Human resources" module
# # #         When I go to My Absence tab
# # #         Then I can see the remaining holiday balance
# # #         When I logout of the current account

# # # # Scenario: 6515 Request for holiday request to be cancelled (reversal) as employee (ensure this is removed from the employees calendar)
# # # #     Precondition: An existing employee with the existing Leave Request
# # # #     Then I navigate to Leave accrual transactions
# # # #     Then I can filter for the existing Leave accrual transaction record
# # # #     Then I can create reverse booking for transaction
# # # #     Then I can input data for the reverse booking
# # # #     Then I can submit the reverse booking
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the reverse booking Request from ESS Employee
# # # #     Then Verify I can approve the reverse booking Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Leave accrual transactions
# # # #     Verify I unable to see the removed Leave accrual transaction record above
# # # #     Then I back to D365 homepage

# # # # Scenario: 6516 Submit an unpaid leave request as an ESSployee & ensure the ESSployee is not able to 'post' their own leave via 'Overview all leave requests'
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as unpaid
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as unpaid
# # # #     Then I back to D365 homepage

# # # # Scenario: 6517 Negative test - ensure an employee cannot delete an unpaid leave request without approval
# # # #     Precondition: Existing Employee has Leave Request with Unpaid code
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as unpaid
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I navigate to Leave accrual transactions
# # # #     Then I can filter for the existing Leave accrual transaction record
# # # #     Then I can create reverse booking for transaction
# # # #     Then I can input data for the reverse booking
# # # #     Then I can submit the reverse booking
# # # #     Then Verify I unable to approved on worker record
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the reverse booking Request from ESS Employee
# # # #     Then Verify I can approve the reverse booking Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Leave accrual transactions
# # # #     Verify I unable to see the removed Leave accrual transaction record above
# # # #     Then I back to D365 homepage

# # # # Scenario: 6518 As employee submit a request for a volunteer day
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Volunteer day
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as volunteer day
# # # #     Then I back to D365 homepage

# # # # Scenario: 6519 As an employee submit a request for compassionate leave
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as compassionate leave
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as compassionate leave
# # # #     Then I back to D365 homepage

# # # # Scenario: 6521 As an employee submit a request for Jury Service and follow through for approval
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Jury Service
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as Jury Service
# # # #     Then I back to D365 homepage

# # # # Scenario: 6522 As an ESSployee submit a request for Time In Lieu and follow through to approval
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Time In Lieu
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as Time In Lieu
# # # #     Then I back to D365 homepage

# # # # Scenario: 6523 As an ESSployee submit a request for Study Leave and follow through to approval
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Study Leave
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as Study Leave
# # # #     Then I back to D365 homepage

# # # # Scenario: 6525 As an ESSployee submit a sickness record
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Sickness
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as Sickness
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # # Scenario: 6509 Ensure a line manager can reverse an ESSployees sickness record as well as holiday / other
# # # #     Precondition: Must perform the TCs 6521, 6522, 6523, 6525 before execute this TC
# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Leave accrual transactions
# # # #     Then I can filter for the existing Leave accrual transaction record of Sickness Leave Code
# # # #     Then I can create reverse booking for transaction as Manager
# # # #     Then I can input data for the reverse booking as Manager
# # # #     Then I can submit the reverse booking as Manager
# # # #     Then Verify I unable to see the removed Leave accrual transaction Sickness record above

# # # #     Then I can filter for the existing Leave accrual transaction record of Jury Service Leave Code
# # # #     Then I can create reverse booking for transaction as Manager
# # # #     Then I can input data for the reverse booking as Manager
# # # #     Then I can submit the reverse booking as Manager
# # # #     Then Verify I unable to see the removed Leave accrual transaction Jury Service record above

# # # #     Then I can filter for the existing Leave accrual transaction record of Study Leave Leave Code
# # # #     Then I can create reverse booking for transaction as Manager
# # # #     Then I can input data for the reverse booking as Manager
# # # #     Then I can submit the reverse booking as Manager
# # # #     Then Verify I unable to see the removed Leave accrual transaction Study Leave record above

# # # #     Then I can filter for the existing Leave accrual transaction record of Time In Lieu Leave Code
# # # #     Then I can create reverse booking for transaction as Manager
# # # #     Then I can input data for the reverse booking as Manager
# # # #     Then I can submit the reverse booking as Manager
# # # #     Then Verify I unable to see the removed Leave accrual transaction Time In Lieu record above
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # # Scenario: 6538 As an employee, submit a holiday request for 1 week, then update to 3 days only
# # # #     Precondition: Existing Employee with Line Manager
# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Holiday and 1 week long
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I can see the view balance, used leave and accrued leave reduced as Sickness and 1 week long
# # # #     Then I back to D365 homepage

# # # #     Then I navigate to Leave accrual transactions
# # # #     Then I can filter for the existing Leave accrual transaction record
# # # #     Then I can create reverse booking for transaction
# # # #     Then I can input data for the reverse booking
# # # #     Then I can submit the reverse booking
# # # #     Then Verify as ESSEmployee I unable to approved on worker record
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the reverse booking Request from ESS Employee
# # # #     Then Verify I can approve the reverse booking Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Leave accrual transactions
# # # #     Verify I unable to see the removed Leave accrual transaction record above
# # # #     Then I back to D365 homepage

# # # # Scenario: 6541 Enter a sickness record for an employee via a manager journal
# # # #     Precondition: An existing employee with Line Manager
# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Manager request
# # # #     Then I create a new Leave Journal
# # # #     Then I create a new Leave Journal Lines
# # # #     Then I can input the data for the new Leave Journal Lines with sickness
# # # #     Then Verify I able to save current changes
# # # #     Then Verify I can post the new Leave Journal successfully
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then Verify I able to see the leave applies to the workers calendar
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # # Scenario: 6505 Negative test - as manager try and enter a holiday for an ESSployee who is already off sick on a specified date
# # # #     Precondition: Complete the TCs 6541 - Have Employee with the approved Leave request as Sickness
# # # #     Given I am on the login page
# # # #     When As HR Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Manager request
# # # #     Then I create a new Leave Journal
# # # #     Then I create a new Leave Journal Lines
# # # #     Then I can input the data for the new Leave Journal Lines with Holiday and the Same date as Sickness request
# # # #     Then Verify I unable to save current changes as the error occurs
# # # #     Then I back to D365 homepage

# # # # Scenario: 6540 As HR add manager as delegate to enable manager to submit leave on behalf of employee
# # # #     Precondition: An existing employee with Line Manager
# # # #     Then I navigate to Leave entry delegation
# # # #     Then I create a new Leave entry delegation
# # # #     Then I select Type for the new Leave entry delegation as User
# # # #     Then I can select the delegate person for the new Leave entry delegation
# # # #     Then Verify I able to save current changes
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Line Manager, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I navigate to Employee self service workspace
# # # #     Then I can go to the My Absence tab
# # # #     Then I create a new Leave Request
# # # #     Then I can input the data for the new Leave Request as Holiday
# # # #     Then I can input the Requested For field as another employee
# # # #     Then I can submit the new Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I can go to Work Items Assigned to Me page
# # # #     Then I can see the Leave Request from ESS Employee
# # # #     Then Verify I can approve the Leave Request
# # # #     Then I back to D365 homepage
# # # #     Then I logout of the current account

# # # #     Given I am on the login page
# # # #     When As Employee, I able to login with valid credential
# # # #     Then I should see a system dashboard title
# # # #     Then I go to the Leave Journal page
# # # #     Then I filter desire leave request
# # # #     Then Verify I can see the Leave journal appears with status Posted

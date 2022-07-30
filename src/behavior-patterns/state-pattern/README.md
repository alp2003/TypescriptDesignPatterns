# State Pattern

State Pattern = moving state smoothly onTrial - Paid - TrialExpired

Example:
ISubscriptionState interface that all the states implements
Every state compose Subscription that have the current state as it's data member

if user pay it's pass to state PaidState, if user expired move to TrialExpiredState
Begins on TrialState if 14 days passed move to Trial Expired State if paid move to Paid State

Feature: Music remote play
  Scenario: Press play on remote
    Given a music player
    When I set the remote to Play command
    And I press the button
    Then I should see "Playing the song."

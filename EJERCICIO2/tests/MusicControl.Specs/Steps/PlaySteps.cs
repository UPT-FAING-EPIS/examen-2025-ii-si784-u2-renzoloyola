using TechTalk.SpecFlow;
using Xunit;
using MusicControl;

namespace MusicControl.Specs.Steps;

[Binding]
public class PlaySteps
{
    private MusicPlayer? _player;
    private MusicRemote? _remote;
    private string? _result;

    [Given("a music player")]
    public void GivenAMusicPlayer()
    {
        _player = new MusicPlayer();
        _remote = new MusicRemote();
    }

    [When("I set the remote to Play command")]
    public void WhenISetTheRemoteToPlayCommand()
    {
        var cmd = new PlayCommand(_player!);
        _remote!.SetCommand(cmd);
    }

    [When("I press the button")]
    public void WhenIPressTheButton()
    {
        _result = _remote!.PressButton();
    }

    [Then("I should see \"(.*)\"")]
    public void ThenIShouldSee(string expected)
    {
        Assert.Equal(expected, _result);
    }
}

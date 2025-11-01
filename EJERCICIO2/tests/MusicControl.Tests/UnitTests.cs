using Xunit;
using MusicControl;

namespace MusicControl.Tests;

public class UnitTests
{
    [Fact]
    public void PlayCommand_Executes_Play()
    {
        var player = new MusicPlayer();
        var cmd = new PlayCommand(player);
        Assert.Equal("Playing the song.", cmd.Execute());
    }

    [Fact]
    public void PauseCommand_Executes_Pause()
    {
        var player = new MusicPlayer();
        var cmd = new PauseCommand(player);
        Assert.Equal("Pausing the song.", cmd.Execute());
    }

    [Fact]
    public void SkipCommand_Executes_Skip()
    {
        var player = new MusicPlayer();
        var cmd = new SkipCommand(player);
        Assert.Equal("Skipping to the next song.", cmd.Execute());
    }

    [Fact]
    public void MusicRemote_Returns_NoCommand_When_Not_Set()
    {
        var remote = new MusicRemote();
        Assert.Equal("No command set", remote.PressButton());
    }

    [Fact]
    public void MusicRemote_Executes_Command()
    {
        var player = new MusicPlayer();
        var cmd = new PlayCommand(player);
        var remote = new MusicRemote();
        remote.SetCommand(cmd);
        Assert.Equal("Playing the song.", remote.PressButton());
    }
}
